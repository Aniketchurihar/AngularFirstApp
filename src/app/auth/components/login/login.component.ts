import { AuthService } from './../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError : boolean = false;

  constructor(private AuthService : AuthService,private router : Router) { }

  ngOnInit(): void {
  }

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
