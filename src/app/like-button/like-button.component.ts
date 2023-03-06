import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {
  isActive: boolean;
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() id ='';

  constructor() {
    this.isActive = false;
  }

  onClick() {
    console.log("clicked");
    console.log(this.id);
    this.isActive = !this.isActive;
    this.newItemEvent.emit(this.id)
  }  
  
}
