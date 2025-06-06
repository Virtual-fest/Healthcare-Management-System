import { Routes } from "@angular/router";

export const content: Routes = [
    {
        path: 'reports',
        loadChildren: () => import('../../components/reports/reports.routes').then(r => r.reports),
        data: {
            breadcrumb: "Reports"
        },
    },
    {
        path: 'calendar',
        loadChildren: () => import('../../components/calendar/calendar.routes').then(r => r.calendar)
    },
    {
        path: 'bonus-ui',
        loadChildren: () => import('../../components/bonus-ui/bonus-ui.routes').then(r => r.bonusUi),
        data: {
            breadcrumb: 'Bonus Ui'
        }
    },
    {
        path: 'animation',
        loadChildren: () => import('../../components/animation/animation.routes').then(r => r.animation),
        data: {
            breadcrumb: 'Animation'
        }
    },
    {
        path: 'icon',
        loadChildren: () => import('../../components/icons/icons.routes').then(r => r.icons),
        data: {
            breadcrumb: 'Icons'
        }
    },
    {
        path: 'forms/form-control',
        data: {
            breadcrumb: 'Form Controls'
        },
        loadChildren: () => import('../../components/forms/form-controls/form-controls.routes').then(r => r.formControls),
    },
    {
        path: 'forms/form-widgets',
        data: {
            breadcrumb: 'Form Widgets'
        },
        loadChildren: () => import('../../components/forms/form-widgets/form-widgets.routes').then(r => r.formWidgets),
    },
    {
        path: 'forms/form-layout',
        data: {
            breadcrumb: 'Form Layout'
        },
        loadChildren: () => import('../../components/forms/form-layout/form-layout.routes').then(r => r.formLayout),
    },
    {
        path: 'sample-page',
        loadChildren: () => import('../../components/sample-page/sample-page.routes').then(r => r.samplePage),
        data: {
            breadcrumb: 'Pages'
        }
    },
]