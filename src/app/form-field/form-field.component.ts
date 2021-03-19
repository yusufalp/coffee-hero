import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
    let passwordType = this.password.nativeElement.type;

    if (passwordType === 'password') {
      this.password.nativeElement.type = 'text';
      this.passwordToggleText.nativeElement.textContent = ' Hide';
      this.passwordToggleIcon.nativeElement.src =
        './assets/icon--eye-closed.svg';
    } else {
      this.password.nativeElement.type = 'password';
      this.passwordToggleText.nativeElement.textContent = ' Show';
      this.passwordToggleIcon.nativeElement.src = './assets/icon--eye-open.svg';
    }
  }

  error: boolean = false;
  message: string = '';
  alertIcon: string = './assets/icon--alert.svg';

  onChangeReceiveValue(event) {
    this.error = true;
    let value = event.target.value;

    if (event.target.id === 'password') {
      if (value.length < 10) {
        this.message = 'Password must be at least 10 characters!';
        if (value.length === 0) {
          this.message = 'No value provided';
        }
      } else {
        this.error = false;
      }
    }
  }
}
