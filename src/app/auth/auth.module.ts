import { ParticlesModule } from 'angular-particle';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent,
    ResetPasswordComponent, HomeComponent, PageNotFoundComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports : [LoginComponent, RegisterComponent,
     ResetPasswordComponent,
     ContactComponent]
})
export class AuthModule { }
