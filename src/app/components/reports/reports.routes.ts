import {Routes} from "@angular/router";

import {SalesReportComponent} from "./sales-report/sales-report.component";

export const reports: Routes = [
    {
        path: 'sales',
        component: SalesReportComponent,
        data: {
            title: 'Sales',
            breadcrumb: 'Sales'
        }
    },
]