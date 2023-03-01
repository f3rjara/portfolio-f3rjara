import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
