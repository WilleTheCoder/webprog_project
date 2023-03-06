import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {

  constructor() {
    this.isActive = false;
  }
  @Input()
  isActive: boolean;

  onClick() {
    this.isActive = !this.isActive;
  }
}
