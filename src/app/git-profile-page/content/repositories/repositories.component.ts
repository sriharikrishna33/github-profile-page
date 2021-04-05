import { Component, OnInit } from '@angular/core';
import { GET_REPOS } from 'src/app/Constants/api-list';
import { Repositiories } from 'src/app/Models/repositories.model';
import { UserProfile } from 'src/app/Models/user-profile.model';
import { ApiRestHandlerService } from 'src/app/shared/services/api-rest-handler.service';
import * as  REPO_COLORS from '../../../../assets/jsons/git-language-colors.json'
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnInit {
  userProfileDeatils: UserProfile = new UserProfile();
  repoList:Array<Repositiories>=[];
  repoColorsList:any=REPO_COLORS;
  searchString!:string;
  constructor(private apiRestHandlerService: ApiRestHandlerService) {}

  ngOnInit(): void {
    this.apiRestHandlerService._userProfile.subscribe((data:UserProfile)=>{
      this.userProfileDeatils=data;
    });
    setTimeout(() => {
      this.getRepos();
    }, 1000);
  }
  getRepos(){
    this.apiRestHandlerService.getRequest(`${GET_REPOS}${this.userProfileDeatils.login}/repos`).subscribe(( data:Array<Repositiories>)=>{
      this.repoList=data;
    });
  }

  getLanguageColor(languageName:string | any){
    return this.repoColorsList.default[languageName]?.color;
  }
  generateRandom(number:number){
    return this.apiRestHandlerService.generateRandomNumber(number);
  }
}
