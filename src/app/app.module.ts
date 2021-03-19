import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignOnComponent } from './sign-on/sign-on.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormFieldComponent } from './form-field/form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignOnComponent,
    RegistrationFormComponent,
    FormFieldComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
