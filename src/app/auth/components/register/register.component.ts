import { AuthService } from './../../../shared/services/auth.service';
import { User } from './../../../shared/Model/User.Model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userService: AuthService, private toastr: ToastrService,private router : Router) { }

  ngOnInit(): void {
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    }
  }
  onSubmit(form: NgForm) {
    // console.log(f.value);
    // console.log(f.valid);

    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.toastr.success('User registration successful');
          this.router.navigate(['/header']);
        }
        else
          this.toastr.error(data.Errors[0]);
      });
  }

}
