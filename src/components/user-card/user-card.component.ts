import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { UserService } from '../../services/user.service';
import { Store } from '@ngrx/store';
import { addFeed } from '../../state/feed/feed.action';

@Component({
  selector: 'app-user-card',
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() feed: any = [];
  @Output() notifyFeed = new EventEmitter<any>();
  showToastMsg: any;
  toastMsg: any;
  constructor(private requestService: RequestService, private userService: UserService,
    private store: Store
  ) {

  }
  ngOnInit() {

  }
  ngOnChanges() {
    console.log(this.feed);
  }
  onAction(status: string, toUserId: any) {
    this.requestService.sendOrIgnoreRequest(status, toUserId).subscribe({
      next: (res) => {
        if (res.success === true) {
          this.toastMsg = res.message;
          this.showToastMsg = true;
          this.notifyFeed.emit(true);
        }
        setTimeout(() => this.showToastMsg = false, 3000);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
