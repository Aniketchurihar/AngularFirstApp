import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/shared/Model/contact';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model = new Contact();
  submitted = false;
  error: {};

  constructor(private AuthService : AuthService,private router : Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm) {
  //   this.submitted = true;
  //   return this.AuthService.contactForm(form.value).subscribe(
  //     data => this.model = data,
  //     error => this.error = error
  //   );
  // }

  onSubmit(form: NgForm) {
    debugger;
    // console.log(f.value);
    // console.log(f.valid);

    this.AuthService.contactForm(form.value)
      .subscribe((data: any) => {
        if (data == '1') {
          // this.resetForm(form);
           this.toastr.success('Contact Submitted');
          this.router.navigate(['/home']);
        }
        else
          this.toastr.error(data.Errors[0]);
      });
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }

}
