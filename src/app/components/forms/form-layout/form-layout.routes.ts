import {Routes} from '@angular/router';

import {FormWizard1Component} from './form-wizard1/form-wizard1.component';
import {TwoFactorComponent} from './two-factor/two-factor.component';

export const formLayout: Routes = [
    {
        path: 'form-wizard',
        component: FormWizard1Component,
        data: {
            title: " Form Wizard 1",
            breadcrumb: " Form Wizard 1",
        }
    },
    {
        path: 'two-factor',
        component: TwoFactorComponent,
        data: {
            title: "Two Factor",
            breadcrumb: "Two Factor",
        }
    },
];