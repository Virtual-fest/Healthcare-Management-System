import {Component} from '@angular/core';

import {SettingCustomizerComponent} from "./setting-customizer/setting-customizer.component";

@Component({
  selector: 'app-customizer',
  imports: [SettingCustomizerComponent],
  templateUrl: './customizer.component.html',
  styleUrl: './customizer.component.scss'
})

export class CustomizerComponent {

  public customizer: { setting: boolean } = {
    setting: false
  };
  
  open(value: keyof typeof this.customizer) {
    this.customizer[value] = true;
  }

  handleCustomizer(value: boolean) {
    this.customizer.setting = value;
  }
}
