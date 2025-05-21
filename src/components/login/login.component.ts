import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { LoginService } from '../../services/login.service';
import { loginSuccess } from '../state/user/user.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  loginErrorMsg: string | null = null;
  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private store: Store,
    private router: Router) {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const { emailId, password } = this.loginForm.value;
      this.loginService.login(emailId, password).subscribe({
        next: (res) => {
          console.log('Login Successful', res);
          this.store.dispatch(loginSuccess({ user: res.user }));
          this.router.navigate(['/feed'])
        },
        error: (error) => {
          console.log('Login Failed', error);
          this.loginErrorMsg = error?.error?.message || 'Login failed. Please try again.';
        }
      })
    }
  }
}
