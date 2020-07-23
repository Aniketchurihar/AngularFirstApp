import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './../shared/components/header/header.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
  {
    path : 'header' , component : HeaderComponent
  },
  // {
  //   path : 'login' , component : LoginComponent
  // },
  // {
  //   path : 'register' , component : RegisterComponent
  // },
  {
    path : 'reset-password' , component : ResetPasswordComponent
  },
  {
    path : 'login' , component : LoginComponent,
    children: [{ path : 'reset-password' , component : ResetPasswordComponent}]
  },

  {
    path: 'header', component: HeaderComponent,
    children: [{ path: 'login', component: LoginComponent }]
},
{
    path: 'header', component: HeaderComponent,
    children: [{ path: 'register', component: RegisterComponent }]
},
{
  path: 'header', component: HeaderComponent,
  children: [{ path : 'reset-password' , component : ResetPasswordComponent }]
},
{
  path: 'home', component: HomeComponent,
  children: [{ path : 'about' , component : AboutComponent }]
},
{
  path: 'home', component: HomeComponent,
  children: [{ path : 'contact' , component : ContactComponent }]
},
// {
//     path : 'reset-password' , component : ResetPasswordComponent
//   }
//   ,
{ path : '', redirectTo:'/header', pathMatch : 'full'},
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
