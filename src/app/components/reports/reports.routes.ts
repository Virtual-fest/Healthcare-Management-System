import { Routes } from "@angular/router";

import { ProductReportComponent } from "./product-report/product-report.component";
import { SalesReportComponent } from "./sales-report/sales-report.component";
import { SalesReturnReportComponent } from "./sales-return-report/sales-return-report.component";

export const reports: Routes = [
    {
        path: 'products',
        component: ProductReportComponent,
        data: {
            title: 'Products',
            breadcrumb: 'Products'
        }
    },
    {
        path: 'sales',
        component: SalesReportComponent,
        data: {
            title: 'Sales',
            breadcrumb: 'Sales'
        }
    },
    {
        path: 'sales-return',
        component: SalesReturnReportComponent,
        data: {
            title: 'Sales Return',
            breadcrumb: 'Sales Return'
        }
    },
]