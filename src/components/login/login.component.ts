import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../../services/auth.service';
import { addUser } from '../../state/user/user.actions';
import { Store } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSignup: boolean = false;
  loginForm!: FormGroup;
  loginErrorMsg: string | null = null;

  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder,
    private loginService: AuthService,
    private store: Store,
    private router: Router) {
    this.buildForm();
  }
  onSubmit() {
    if (this.loginForm.valid) {
      if (this.isSignup) {
        //SIGNUP CODE HERE
        console.log(this.loginForm)
        this.loginService.signUp(this.loginForm.value)
          .pipe(takeUntil(this.destroy$)).subscribe({
            next: (res) => {
              this.store.dispatch(addUser({ user: res?.data?.user }));
              this.router.navigate(['/profile'])
            },
            error: (error) => {
              console.log('Login Failed', error);
              this.loginErrorMsg = error?.error?.message || 'Signup failed. Please try again.';
            }
          })
      } else {
        const { emailId, password } = this.loginForm.value;
        this.loginService.login(emailId, password).subscribe({
          next: (res) => {
            console.log('Login Successful', res);
            this.store.dispatch(addUser({ user: res?.user }));
            this.router.navigate(['/feed'])
          },
          error: (error) => {
            console.log('Login Failed', error);
            this.loginErrorMsg = error?.error?.message || 'Login failed. Please try again.';
          }
        })
      }
    } {
      return;
    }
  }
  buildForm() {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
    if (this.isSignup) {
      this.loginForm.addControl('firstName', this.fb.control('', Validators.required));
      this.loginForm.addControl('lastName', this.fb.control('', Validators.required));
    }
  }
  toggleMode() {
    this.isSignup = !this.isSignup;
    this.buildForm();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
