import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent {
  @Output('onToggleClick') onToggleClick: EventEmitter<
    any
  > = new EventEmitter();

  onClick() {
    this.onToggleClick.emit();
  }
}
