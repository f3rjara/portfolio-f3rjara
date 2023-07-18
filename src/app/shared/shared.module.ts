import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FooterPageComponent } from './footer-page/footer-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings} from 'ng-recaptcha';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { environment } from 'src/environments/environment';
import { ButtonActionComponent } from './components/button-action/button-action.component';
import { SubtitleSectionComponent } from './components/subtitle-section/subtitle-section.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: environment.siteKeyCaptcha } as RecaptchaSettings,
    },
  ],
  declarations: [
    FooterPageComponent,
    ErrorPageComponent,
    FormContactComponent,
    ButtonActionComponent,
    SubtitleSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    FooterPageComponent,
    ErrorPageComponent,
    FormContactComponent,
    ButtonActionComponent,
    SubtitleSectionComponent
  ]
})

export class SharedModule { }
