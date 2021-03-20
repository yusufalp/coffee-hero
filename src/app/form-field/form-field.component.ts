import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent {
  @Input() labelText: string;
  @Input() inputType: string;
  @Input() inputId: string;
  @Input() imgSrc: string;
  @Input() imgAlt: string;
  @Input() featureText: string;

  @ViewChild('input') password: ElementRef;
  @ViewChild('inputFeatureText') passwordToggleText: ElementRef;
  @ViewChild('inputFeatureIcon') passwordToggleIcon: ElementRef;

  onClickTogglePassword() {
    console.log(this.passwordToggleIcon.nativeElement.alt);
    let passwordType = this.password.nativeElement.type;

    if (passwordType === 'password') {
      this.password.nativeElement.type = 'text';
      this.passwordToggleText.nativeElement.textContent = ' Hide';
      this.passwordToggleIcon.nativeElement.alt = 'closed eye icon';
      this.passwordToggleIcon.nativeElement.src =
        './assets/icon--eye-closed.svg';
    } else {
      this.password.nativeElement.type = 'password';
      this.passwordToggleText.nativeElement.textContent = ' Show';
      this.passwordToggleIcon.nativeElement.alt = 'open eye icon';
      this.passwordToggleIcon.nativeElement.src = './assets/icon--eye-open.svg';
    }
  }

  error: boolean = false;
  message: string = '';
  alertIcon: string = './assets/icon--alert.svg';

  onChangeReceiveValue(event) {
    let value = event.target.value;

    let checkUpperCase = /[A-Z]/g;
    let checkNumber = /[0-9]/g;
    let letterResult = checkUpperCase.test(value);
    let numberResult = checkNumber.test(value);

    if (event.target.id === 'password') {
      this.error = true;
      if (value.length < 10) {
        this.message = 'Password must be at least 10 characters!';
        if (value.length === 0) {
          this.message = 'No value provided';
        }
      } else {
        if (!(letterResult && numberResult)) {
          this.message =
            'Password must include at least one uppercase and one number!';
          return;
        }
        this.error = false;
      }
    }
  }
}
