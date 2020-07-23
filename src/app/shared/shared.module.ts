import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ColumnOneComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports : [
    ColumnOneComponent
  ]
})
export class SharedModule { }
