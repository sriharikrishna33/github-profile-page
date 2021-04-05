import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitProfilePageRoutingModule } from './git-profile-page-routing.module';
import { GitProfilePageComponent } from './git-profile-page.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { SharedModule } from '../shared/shared.module';
import { SideProfileComponent } from './side-profile/side-profile.component';
import { OverviewComponent } from './content/overview/overview.component';
import { RepositoriesComponent } from './content/repositories/repositories.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { PackagesComponent } from './content/packages/packages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
@NgModule({
  declarations: [
    GitProfilePageComponent,
    ProfileHeaderComponent,
    SideProfileComponent,
    OverviewComponent,
    RepositoriesComponent,
    ProjectsComponent,
    PackagesComponent,
  ],
  imports: [
    CommonModule,
    GitProfilePageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: { init: echarts.init },
    }),
  ],
})
export class GitProfilePageModule {}
