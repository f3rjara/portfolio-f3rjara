import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterPageComponent } from './footer-page/footer-page.component';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { FormContactComponent } from './components/form-contact/form-contact.component';

@NgModule({
  declarations: [
    FooterPageComponent,
    NavbarPageComponent,
    ErrorPageComponent,
    FormContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    ToastModule,
    ProgressSpinnerModule
  ],
  exports: [
    FooterPageComponent,
    NavbarPageComponent,
    ErrorPageComponent,
    FormContactComponent
  ]
})

export class SharedModule { }
