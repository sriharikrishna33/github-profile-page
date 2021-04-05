import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/Models/user-profile.model';

@Component({
  selector: 'app-side-profile',
  templateUrl: './side-profile.component.html',
  styleUrls: ['./side-profile.component.scss']
})
export class SideProfileComponent implements OnInit {
  @Input() userProfileDeatils:UserProfile=new UserProfile();
  constructor() { }

  ngOnInit(): void {
  }

}
