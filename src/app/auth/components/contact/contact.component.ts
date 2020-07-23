import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/shared/Model/contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model = new Contact();
  submitted = false;
  error: {};

  constructor(private AuthService : AuthService,private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    return this.AuthService.contactForm(form.value).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }

}
