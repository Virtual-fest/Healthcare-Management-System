import {Routes} from "@angular/router";
import {Sweetalert2Component} from "./sweetalert2/sweetalert2.component";
import {AnimatedModalComponent} from "./animated-modal/animated-modal.component";
import {TimelineComponent} from "./timeline/timeline.component";

export const bonusUi: Routes = [
    {
        path: 'sweetalert2',
        component: Sweetalert2Component,
        data: {
            title: 'Sweet Alerts',
            breadcrumb: 'Sweet Alerts'
        }
    },
    {
        path: 'animated-modal',
        component: AnimatedModalComponent,
        data: {
            title: 'Animated Modal',
            breadcrumb: 'Animated Modal'
        }
    },
     {
        path: 'timeline',
        component: TimelineComponent,
        data: {
            title: 'Timeline',
            breadcrumb: 'Timeline'
        }
    }, 
]