import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent {
@Input() favorites: any[] | undefined;
@Output() remove = new EventEmitter<string>();
}
