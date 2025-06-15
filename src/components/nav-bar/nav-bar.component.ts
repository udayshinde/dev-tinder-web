import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../state/user/user.model';
import { Store } from '@ngrx/store';
import { selectUser } from '../../state/user/user.selectors';
import { CommonModule } from '@angular/common';
import { addUser, logout } from '../../state/user/user.actions';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { removeFeed } from '../../state/feed/feed.action';
import { removeRequests } from '../../state/requests/requests.action';
import { removeConnections } from '../../state/connections/connections.action';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  user$: Observable<User | null>;


  constructor(private store: Store,
    private logoutService: AuthService,
    private router: Router) {
    this.user$ = this.store.select(selectUser);
  }

  ngOnInit() {
  }
  ngOnChanges() {
    this.user$.subscribe((user) => {
      console.log(user);
    })
  }

  logout() {
    this.logoutService.logout().subscribe({
      next: (res) => {
        this.store.dispatch(logout());
        this.store.dispatch(removeFeed());
        this.store.dispatch(removeRequests());
        this.store.dispatch(removeConnections());
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}