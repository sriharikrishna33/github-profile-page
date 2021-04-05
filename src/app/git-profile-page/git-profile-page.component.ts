import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { USER_PROFILE } from '../Constants/api-list';
import { UserProfile } from '../Models/user-profile.model';
import { ApiRestHandlerService } from '../shared/services/api-rest-handler.service';

@Component({
  selector: 'app-git-profile-page',
  templateUrl: './git-profile-page.component.html',
  styleUrls: ['./git-profile-page.component.scss'],
})
export class GitProfilePageComponent implements OnInit {
  userProfileDeatils: UserProfile = new UserProfile();
  navLinks: Array<any> = [];
  activeLinkIndex = -1;
  constructor(
    private apiRestHandlerService: ApiRestHandlerService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navLinks = [
      {
        label: 'Overview',
        icon: 'import_contacts',
        link: '/overview',
        index: 0,
      },
      {
        label: 'Repositories',
        icon: 'sim_card',
        link: '/repositories',
        index: 1,
      },
      {
        label: 'Projects',
        icon: 'insert_chart_outlined',
        link: '/projects',
        index: 2,
      },
      {
        label: 'Packages',
        icon: 'view_in_ar',
        link: '/packages',
        index: 3,
      },
    ];
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
    this.getUserProfileDetails();
  }
  getUserProfileDetails() {
    this.apiRestHandlerService.getRequest(USER_PROFILE).subscribe(
      (userProfile: UserProfile) => {
        this.userProfileDeatils = userProfile;
        this.apiRestHandlerService._userProfile$.next(userProfile);
      },
      (error: any) => {
        this.toaster.error(error.error.message, 'ERROR');
      }
    );
  }
}
