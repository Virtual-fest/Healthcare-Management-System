import { Routes } from '@angular/router';

import { DatepickerComponent } from './datepicker/datepicker.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

export const formWidgets: Routes = [
    {
        path: 'datepicker',
        component: DatepickerComponent,
        data: {
            title: "Datepicker",
            breadcrumb: "Datepicker",
        }
    },
    {
        path: 'type-ahead',
        component: TypeaheadComponent,
        data: {
            title: "Typeahead",
            breadcrumb: "Typeahead",
        }
    },
    {
        path: 'clipboard',
        component: ClipboardComponent,
        data: {
            title: "Clipboard",
            breadcrumb: "Clipboard",
        }
    },
];