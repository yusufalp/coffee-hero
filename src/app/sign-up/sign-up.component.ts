import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  @Output('onToggleClick') onToggleClick: EventEmitter<
    any
  > = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.onToggleClick.emit();
  }
}
