import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { ProfileService } from '../../services/profile.service';
import { loginSuccess } from '../state/user/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private profileService: ProfileService, private store: Store, private router: Router) {

  }
  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.profileService.getUserProfile().subscribe({
      next: (response) => {
        console.log(response)
        this.store.dispatch(loginSuccess({ user: response.data }));
      },
      error: (error) => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }
        console.error('Error fetching user profile:', error);
      }
    })
  }
}
