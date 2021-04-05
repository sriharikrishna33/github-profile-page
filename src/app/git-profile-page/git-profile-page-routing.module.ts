import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './content/overview/overview.component';
import { PackagesComponent } from './content/packages/packages.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { RepositoriesComponent } from './content/repositories/repositories.component';

const routes: Routes = [
  {path:'',redirectTo:'overview',pathMatch:"full"},
  {path:'overview',component:OverviewComponent},
  {path:'repositories',component:RepositoriesComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'packages',component:PackagesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitProfilePageRoutingModule { }
