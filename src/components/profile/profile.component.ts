import { Component, ViewChild } from '@angular/core';
import { EditProfileComponent } from "../edit-profile/edit-profile.component";
import { Store } from '@ngrx/store';
import { selectUser } from '../../state/user/user.selectors';
import { Observable } from 'rxjs';
import { User } from '../../state/user/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [EditProfileComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @ViewChild(EditProfileComponent) editProfileComp!: EditProfileComponent;
  user$!: Observable<User | null>;

  constructor(private store: Store) {

  }
  canDeactivate(): boolean {
    return this.editProfileComp?.canDeactivate?.() ?? true;
  }
  ngOnInit() {
    this.user$ = this.store.select(selectUser);
    this.user$.subscribe((user: any) => {
      console.log('User:', user);
    });
  }
}
