import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPopup = true;
  username: string;
  password: string;

  constructor(private router: Router, private snackBar: MatSnackBar) {}
  

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(`Username: ${this.username}, Password: ${this.password}`);
      // handle login form submission here
      // navigate to dashboard component
      // show success message using snackbar
      this.snackBar.open('Login successful!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['blue-snackbar']
      });
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Form not submitted, invalid data');
    }
  }

  closePopup() {
    this.showPopup = false;
  }
}

