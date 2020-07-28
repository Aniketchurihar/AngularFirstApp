import { AuthService } from './../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ViewChild,ElementRef } from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth2 : any;

  // @ViewChild('loginRef', {static: true }) loginElement: ElementRef;

  isLoginError : boolean = false;

  constructor(private AuthService : AuthService,private router : Router) { }

  ngOnInit(): void {

    // this.googleInitialize();
  }

  // googleInitialize() {
  //   window['googleSDKLoaded'] = () => {
  //     window['gapi'].load('auth2', () => {
  //       this.auth2 = window['gapi'].auth2.init({
  //         client_id: '582504874096-7nvlratnt5qvtjshi5775qectr4fsir8.apps.googleusercontent.com',
  //         cookie_policy: 'single_host_origin',
  //         scope: 'profile email'
  //       });
  //       this.prepareLogin();
  //     });
  //   }
  //   (function(d, s, id){
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) {return;}
  //     js = d.createElement(s); js.id = id;
  //     js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }(document, 'script', 'google-jssdk'));
  // }

  // prepareLogin() {
  //   this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
  //     (googleUser) => {
  //       let profile = googleUser.getBasicProfile();
  //       // console.log('Token || ' + googleUser.getAuthResponse().id_token);
  //       // console.log('Image URL: ' + profile.getImageUrl());
  //       // console.log('Email: ' + profile.getEmail());
  //       //localStorage.setItem('userToken',googleUser.getAuthResponse().id_token);
  //       this.router.navigate(['/home']);
  //     }, (error) => {
  //       alert(JSON.stringify(error, undefined, 2));
  //     });
  // }

  onSubmit(f: NgForm) {
    debugger;
    // console.log(f.value);
    // // console.log(f.value["username"]);
    // console.log(f.valid);


    this.AuthService.userAuthentication(f.value["username"],f.value["password"]).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/home']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

}
