import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-on.component.html',
  styleUrls: ['./sign-on.component.css'],
})
export class SignOnComponent {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('input') password: ElementRef;
  @ViewChild('passwordToggleText') passwordToggleText: ElementRef;
  @ViewChild('passwordToggleIcon') passwordToggleIcon: ElementRef;

  onClickTogglePassword = (args: any): void => {
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
  };
}
