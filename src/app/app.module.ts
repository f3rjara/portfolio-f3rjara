import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarPageComponent } from './shared/components/organisms/navbar-page/navbar-page.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    NavbarPageComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
