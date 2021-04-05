import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/Models/user-profile.model';
@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {
  @Input() userProfileDeatils:UserProfile=new UserProfile();
  constructor() { }

  ngOnInit(): void {
  }


}
