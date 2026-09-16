import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterPageComponent } from './footer-page/footer-page.component';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { environment } from 'src/environments/environment';
import { ButtonActionComponent } from './components/button-action/button-action.component';
import { SubtitleSectionComponent } from './components/subtitle-section/subtitle-section.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  providers: [],
  declarations: [
    FooterPageComponent,
    NavbarPageComponent,
    ErrorPageComponent,
    FormContactComponent,
    ButtonActionComponent,
    SubtitleSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    InputTextarea,
    ButtonModule,
    ToastModule,
    ProgressSpinnerModule,
    NgxCaptchaModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    FooterPageComponent,
    NavbarPageComponent,
    ErrorPageComponent,
    FormContactComponent,
    ButtonActionComponent,
    ProgressSpinnerModule,
    SubtitleSectionComponent
  ]
})

export class SharedModule { }
