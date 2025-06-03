import { Routes } from '@angular/router';
import { LoginBgImageComponent } from './login-bg-image/login-bg-image.component';
import { LoginBgImageTwoComponent } from './login-bg-image-two/login-bg-image-two.component';
import { LoginBgImageThreeComponent } from './login-bg-image-three/login-bg-image-three.component';
import { LoginSweetAlertComponent } from './login-sweet-alert/login-sweet-alert.component';
import { RegisterComponent } from './register/register.component';
import { RegisterBgImageComponent } from './register-bg-image/register-bg-image.component';
import { RegisterBgImageTwoComponent } from './register-bg-image-two/register-bg-image-two.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

export const authentication: Routes = [
    {
        path: 'login',
        component: LoginBgImageTwoComponent
    },
    {
        path: 'login-bg-image-three',
        component: LoginBgImageThreeComponent
    },
    {
        path: 'login-sweet-alert',
        component: LoginSweetAlertComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'register-bg-image',
        component: RegisterBgImageComponent
    },
    {
        path: 'register-bg-image-two',
        component: RegisterBgImageTwoComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent
    },
    {
        path:'maintenance',
        component: MaintenanceComponent
    }
]