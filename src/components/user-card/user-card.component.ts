import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() feed: any = [];
  ngOnInit() {

  }
  ngOnChanges() {
    console.log(this.feed);
  }
}
