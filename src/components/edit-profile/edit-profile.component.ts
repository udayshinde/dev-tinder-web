import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { filter, take } from 'rxjs';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserService } from '../../services/user.service';
import { Store } from '@ngrx/store';
import { addUser } from '../../state/user/user.actions';
import { CanComponentDeactivate } from '../../guards/edit-profile.guard';

@Component({
  selector: 'app-edit-profile',
  imports: [ReactiveFormsModule, CommonModule, UserCardComponent],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements CanComponentDeactivate {
  @Input() user: any;
  genderArr = [{ value: 'male', name: 'Male' }, { value: 'female', name: 'Female' }, { value: 'otehr', name: 'Other' }]
  loginErrorMsg: any = null;
  toastMsg: any = null;
  showToastMsg: boolean = false;
  updateProfileForm!: FormGroup;
  formDirty: boolean = false;
  constructor(private fb: FormBuilder, private userService: UserService, private store: Store) {

  }
  ngOnInit() {
    // this.user.pipe(
    //   filter(user => !!user), // ignore null values
    //   take(1) // if you only want the initial value
    // ).subscribe((user: any) => {

    // });


  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user']) {
      this.formDirty = true;
      console.log(this.user)
      const { firstName, lastName, age, gender, about, photoUrl } = this.user;
      this.updateProfileForm = this.fb.group({
        firstName: [firstName],
        lastName: [lastName],
        photoUrl: [photoUrl],
        age: [age],
        gender: [gender],
        about: [about]
      });
    }
  }

  canDeactivate(): boolean {
    if (this.formDirty) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }

  onSubmit() {
    if (this.updateProfileForm.valid) {
      this.userService.updateProfile(this.updateProfileForm.value).subscribe({
        next: (res) => {
          this.toastMsg = 'Profile updated successfully';
          this.showToastMsg = true;
          setTimeout(() => this.showToastMsg = false, 3000);
          this.store.dispatch(addUser({ user: res?.data }));
          this.loginErrorMsg = null;
        },
        error: (err) => {
          console.log('Error updating profile', err);
          this.loginErrorMsg = err?.error?.message || 'Update failed. Please try again.';
        },
      });
    }
  }
}