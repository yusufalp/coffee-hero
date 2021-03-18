import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-on.component.html',
  styleUrls: ['./sign-on.component.css'],
})
export class SignOnComponent {
  @ViewChild('password') password: ElementRef;
  @ViewChild('passwordToggleText') passwordToggleText: ElementRef;
  @ViewChild('passwordToggleIcon') passwordToggleIcon: ElementRef;

  onClickTogglePassword() {
    let passwordType = this.password.nativeElement.type;
    // let passwordToggleText = this.passwordToggleText.nativeElement.textContent;
    // let passwordToggleIcon = this.passwordToggleIcon.nativeElement.imgSrc;

    if (passwordType === 'password') {
      this.password.nativeElement.type = 'text';
      this.passwordToggleText.nativeElement.textContent = 'Hide';
    } else {
      this.password.nativeElement.type = 'password';
      this.passwordToggleText.nativeElement.textContent = 'Show';
    }
  }
}
