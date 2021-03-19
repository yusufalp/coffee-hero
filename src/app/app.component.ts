import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Coffee Hero';

  @Input() toggleModal: Function;

  display = false;
  onToggleClick() {
    console.log(this.display);
    this.display = !this.display;

    this.display
      ? document.querySelector('.registration-modal').classList.remove('hidden')
      : document.querySelector('.registration-modal').classList.add('hidden');
  }
}
