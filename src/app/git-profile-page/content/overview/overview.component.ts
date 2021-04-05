import { Component, OnInit } from '@angular/core';
import { CONTRIBUTIONS, GET_REPOS } from 'src/app/Constants/api-list';
import { Repositiories } from 'src/app/Models/repositories.model';
import { UserProfile } from 'src/app/Models/user-profile.model';
import { ApiRestHandlerService } from 'src/app/shared/services/api-rest-handler.service';
import * as REPO_COLORS from '../../../../assets/jsons/git-language-colors.json';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts/types/dist/echarts';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  activities:Array<any>=[
    {
      time: 'Apr 2021',
      title: 'Created 4 commits in 1 repository',
      text: 'node-opcua/node-opcua-pki 4 commits',
      count:40
  },
  {
      time: 'Mar 2021',
      title: 'Created 54 commits in 3 repositories',
      text: 'vercel/pkg 5 commits',
      count:60
  },
  {
      time: 'Feb 2021',
      title: 'UX and UI for Hyper Admin',
      text: 'Opened 1  pull request in 1 repository',
      count:80
  },
  ];
  public heatMapChartOptions: EChartsOption = {
    legend:{
      show:false,
      align:'right'
    },
    tooltip: {
      
    },
    visualMap: {
      show:false,
      min: 0,
      max: 10000,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: 65,
      inRange : {   
        color: ['#216e39', '#30a14e','#40c463','#9be9a8','#ebedf0' ] //From smaller to bigger value ->
    },
    },
    calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: ['auto', 13],
      range: '2016',
      itemStyle: {
        borderWidth: 0.5,
      },
      yearLabel: { show: true },
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: this.getVirtulData(2016),
    },
  };
  repoList: Array<Repositiories> = [];
  userProfileDeatils: UserProfile = new UserProfile();
  repoColorsList: any = REPO_COLORS;
  constructor(private apiRestHandlerService: ApiRestHandlerService) {}

  ngOnInit(): void {
    this.apiRestHandlerService._userProfile.subscribe((data: UserProfile) => {
      this.userProfileDeatils = data;
    });
    setTimeout(() => {
      this.getRepos();
    }, 1000);
  }
  getRepos() {
    this.apiRestHandlerService
      .getRequest(`${GET_REPOS}${this.userProfileDeatils.login}/repos`)
      .subscribe((data: Array<Repositiories>) => {
        this.repoList = data.slice(0, 6);
      });
  }
  getLanguageColor(languageName: string | any) {
    return this.repoColorsList.default[languageName]?.color;
  }
  generateRandom(number: number) {
    return this.apiRestHandlerService.generateRandomNumber(number);
  }
  getContributions() {
    this.apiRestHandlerService
      .getRequest(CONTRIBUTIONS)
      .subscribe((data: any) => {});
  }
  getVirtulData(year: any) {
    year = year || '2017';
    var date = +(<any>echarts).number.parseDate(year + '-01-01');
    var end = +(<any>echarts).number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
          (<any>echarts).format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
  }
}
