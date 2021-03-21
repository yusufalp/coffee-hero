import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignOnComponent } from './sign-on/sign-on.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, SignOnComponent, RegistrationFormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
