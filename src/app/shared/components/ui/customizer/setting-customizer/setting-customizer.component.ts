import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutService } from '../../../../services/layout.service';

@Component({
  selector: 'app-setting-customizer',
  imports: [CommonModule, FormsModule],
  templateUrl: './setting-customizer.component.html',
  styleUrl: './setting-customizer.component.scss'
})

export class SettingCustomizerComponent {

  @Output() settingOpen = new EventEmitter();

  public sidebarType = localStorage.getItem('sidebar_type');
  public primary: string = localStorage.getItem('--theme-default') || '#7366ff';
  public secondary: string = localStorage.getItem('--theme-secondary') || '#838383';

  constructor(public layoutService: LayoutService){
    if(this.sidebarType != null && this.layoutService.config.settings.layout === ''){
      this.layoutService.config.settings.sidebar_type = this.sidebarType;
    }

    layoutService.config.color.primary = this.primary || '#7366ff';
    layoutService.config.color.secondary = this.secondary || '#838383';

    document.documentElement.style.setProperty('--theme-default', this.primary);
    document.documentElement.style.setProperty('--theme-secondary', this.secondary);
  }

  closeCustomizer() {
    this.settingOpen.emit(false);
  }

  applyColor() {
    document.documentElement.style.setProperty('--theme-default', this.primary);
    document.documentElement.style.setProperty('--theme-secondary', this.secondary);
    localStorage.setItem('--theme-default', this.primary);
    localStorage.setItem('--theme-secondary', this.secondary);
    this.layoutService.config.color.primary = this.primary;
    this.layoutService.config.color.secondary = this.secondary;

    window.location.reload();
  }
}
