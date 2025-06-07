import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';

import {LayoutService} from '../../../services/layout.service';

@Component({
  selector: 'app-svg-icon',
  imports: [CommonModule],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss'
})

export class SvgIconComponent {

  @Input("icon") public icon: any;
  @Input("class") public class: string;
  @Input() change: boolean = false;

  constructor(public layoutService: LayoutService){}

}
