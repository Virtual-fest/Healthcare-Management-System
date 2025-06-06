import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";
import Swal from "sweetalert2";

@Component({
  selector: 'login-form',
  imports: [RouterModule, ReactiveFormsModule, NgClass],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})

export class LoginFormComponent {

  public show: boolean = false;
  public loginForm: FormGroup;
  public validate: boolean = false;

  constructor(public router: Router) {

    const userDetails = localStorage.getItem('user');
    if (userDetails?.length != null) {
      router.navigate(['/sample-page']).then()
    }

    this.loginForm = new FormGroup({
      email: new FormControl("Test@gmail.com", [Validators.required, Validators.email]),
      password: new FormControl("test123", Validators.required)
    })
  }

  showPassword() {
    this.show = !this.show;
  }

  login() {
    this.validate = true;
    if (this.loginForm.valid) {
      if (this.loginForm.value["email"] == "Test@gmail.com" && this.loginForm.value["password"] == "test123") {
        let user = {
          email: "Test@gmail.com",
          password: "test123",
          name: "test user",
        };
        localStorage.setItem("user", JSON.stringify(user));
        Swal.fire({
          title: 'Signed in successfully',
          icon: 'success',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
        this.router.navigate(["/sample-page"]).then();
      } else {
        Swal.fire({
          title: 'Please Enter valid email or password...!',
          icon: 'warning',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
      }
    }
  }
}
