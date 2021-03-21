import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignOnComponent } from './sign-on/sign-on.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: SignOnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
