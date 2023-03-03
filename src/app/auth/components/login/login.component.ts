import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  login() {
    this.authService.ingresarLogin(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res)
      },
      (error: any) => {
        console.log(error)
      }
    )
  }
}
