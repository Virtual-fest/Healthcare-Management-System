import {CommonModule} from '@angular/common';
import {Component, HostListener} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';

import {HeaderComponent} from "../../header/header.component";
import {FooterComponent} from "../../footer/footer.component";
import {SidebarComponent} from '../../sidebar/sidebar.component';
import {BreadcrumbComponent} from '../../ui/breadcrumb/breadcrumb.component';
import {LayoutService} from '../../../services/layout.service';
import {CustomizerComponent} from "../../ui/customizer/customizer.component";

@Component({
  selector: 'app-content',
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent, BreadcrumbComponent, FooterComponent,CustomizerComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})

export class ContentComponent {

  public layout: string;

  constructor(
    public layoutService: LayoutService,
    private route: ActivatedRoute
  ) {
    this.layout = this.layoutService.config.settings.layout;

    this.route.queryParams.subscribe(params => {
      const newLayout = params['layout'];
      if (newLayout) {
        this.layout = newLayout;
        localStorage.setItem('layout', this.layout);
        this.layoutService.config.settings.layout = this.layout;
        this.layoutService.applyLayout(this.layout);
      }
    });

    const width = window.innerWidth;
    this.layoutService.closeSidebar = width < 1200;
    if (width <= 992) {
      this.layoutService.config.settings.sidebar_type = 'compact-wrapper';
    } else if (this.layout) {
      this.layoutService.applyLayout(this.layout);
    }
  }
 
  @HostListener('window:resize')
  onResize(): void {
    const width = window.innerWidth;

    this.layoutService.closeSidebar = width < 1200;

    if (width <= 992) {
      this.layoutService.config.settings.sidebar_type = 'compact-wrapper';
    } else if (this.layout) {
      this.layoutService.applyLayout(this.layout);
    }
  }
}
