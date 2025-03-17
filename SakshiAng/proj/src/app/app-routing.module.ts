import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Comp/register/register.component';
import { LoginComponent } from './Comp/login/login.component';
import { HomeComponent } from './Comp/home/home.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},

  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
