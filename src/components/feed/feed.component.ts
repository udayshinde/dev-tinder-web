import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Store } from '@ngrx/store';
import { addFeed } from '../../state/feed/feed.action';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-feed',
  imports: [UserCardComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  feed: any[] | null = null;
  constructor(private feedService: UserService, private store: Store) {

  }
  ngOnInit() {
    this.getFeed();
  }
  getFeed() {
    this.feedService.getFeed().subscribe({
      next: (res) => {
        this.store.dispatch(addFeed({ feed: res?.data }));
        this.feed = res?.data[0];
      },
      error: (err) => {
        console.error('Error fetching feed:', err);
      }
    })
  }
}
