import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitProfilePageComponent } from './git-profile-page/git-profile-page.component';

const routes: Routes = [
  { path: '', component: GitProfilePageComponent, loadChildren: () => import('./git-profile-page/git-profile-page.module').then(m => m.GitProfilePageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
