import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../state/user/user.model';
import { Store } from '@ngrx/store';
import { selectUser, selectUserState } from '../state/user/user.selectors';
import { CommonModule } from '@angular/common';
import { logout } from '../state/user/user.actions';
import { LogoutService } from '../../services/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  user$: Observable<User | null>;


  constructor(private store: Store,
    private logoutService: LogoutService,
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
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}