import {Routes} from '@angular/router';

import {FontAwesomeIconComponent} from './font-awesome-icon/font-awesome-icon.component';
import {ThemifyIconComponent} from './themify-icon/themify-icon.component';
import {FeatherIconsComponent} from './feather-icon/feather-icon.component';

export const icons: Routes = [
    {
        path: 'font-awesome-icon',
        component: FontAwesomeIconComponent,
        data: {
            title: "Fontawesome Icon",
            breadcrumb: "Fontawesome Icon",
        }
    },
    {
        path: 'thimify-icon',
        component: ThemifyIconComponent,
        data: {
            title: "Themify Icon",
            breadcrumb: "Themify Icon",
        }
    },
    {
        path: 'feather-icon',
        component: FeatherIconsComponent,
        data: {
            title: "Feather Icons",
            breadcrumb: "Feather Icon",
        }
    },
]