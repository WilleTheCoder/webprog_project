import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {
  @Input() isActive: boolean;
  constructor() {
    this.isActive = false;

  }

}
