import {Component} from '@angular/core';

import {
    ConfirmationApprovalSweetalertComponent
} from "./widgets/confirmation-approval-sweetalert/confirmation-approval-sweetalert.component";
import {ConfirmationSweetalertComponent} from "./widgets/confirmation-sweetalert/confirmation-sweetalert.component";
import {DismissSweetalertComponent} from "./widgets/dismiss-sweetalert/dismiss-sweetalert.component";
import {PositionSweetAlertComponent} from "./widgets/position-sweet-alert/position-sweet-alert.component";
import {RichHtmlSweetalertComponent} from "./widgets/rich-html-sweetalert/rich-html-sweetalert.component";

@Component({
  selector: 'app-sweetalert2',
  imports: [PositionSweetAlertComponent,
            DismissSweetalertComponent, RichHtmlSweetalertComponent, ConfirmationSweetalertComponent,
            ConfirmationApprovalSweetalertComponent],
  templateUrl: './sweetalert2.component.html',
  styleUrl: './sweetalert2.component.scss'
})

export class Sweetalert2Component {

}
