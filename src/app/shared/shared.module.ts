import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterPageComponent } from './footer-page/footer-page.component';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    FooterPageComponent,
    NavbarPageComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterPageComponent,
    NavbarPageComponent,
    ErrorPageComponent
  ]
})

export class SharedModule { }
