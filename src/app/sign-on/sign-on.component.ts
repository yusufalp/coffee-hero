import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-on.component.html',
  styleUrls: ['./sign-on.component.css'],
})
export class SignOnComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  display = false;
  onToggleClick() {
    this.display = !this.display;

    this.display
      ? document.querySelector('.registration-modal').classList.remove('hidden')
      : document.querySelector('.registration-modal').classList.add('hidden');
  }

  @ViewChild('password') password: ElementRef;
  @ViewChild('passwordFeatureText') passwordFeatureText: ElementRef;
  @ViewChild('passwordFeatureIcon') passwordFeatureIcon: ElementRef;

  onClickTogglePassword() {
    let passwordType = this.password.nativeElement.type;

    if (passwordType === 'password') {
      this.password.nativeElement.type = 'text';
      this.passwordFeatureText.nativeElement.textContent = ' Hide';
      this.passwordFeatureIcon.nativeElement.alt = 'closed eye icon';
      this.passwordFeatureIcon.nativeElement.src =
        './assets/icon--eye-closed.svg';
    } else {
      this.password.nativeElement.type = 'password';
      this.passwordFeatureText.nativeElement.textContent = ' Show';
      this.passwordFeatureIcon.nativeElement.alt = 'open eye icon';
      this.passwordFeatureIcon.nativeElement.src =
        './assets/icon--eye-open.svg';
    }
  }

  error: boolean = false;
  errorMessage: string = '';

  onChangeReceiveValue(event) {
    let value = event.target.value;

    let checkUpperCase = /[A-Z]/g;
    let checkNumber = /[0-9]/g;
    let letterResult = checkUpperCase.test(value);
    let numberResult = checkNumber.test(value);

    if (event.target.id === 'password') {
      this.error = true;
      if (value.length < 10) {
        this.errorMessage = 'Password must be at least 10 characters!';
        if (value.length === 0) {
          this.errorMessage = 'No value provided';
        }
      } else {
        if (!(letterResult && numberResult)) {
          this.errorMessage =
            'Password must include at least one uppercase and one number!';
          return;
        }
        this.error = false;
      }
    }
  }

  onSubmit() {
    this.router.navigate(['/dashboard']);
  }
}
