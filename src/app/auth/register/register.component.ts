import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RegisterFormComponent} from './register-form/register-form.component';

@Component({
  selector: 'app-register',
  imports: [CommonModule, RouterModule, RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {

}
