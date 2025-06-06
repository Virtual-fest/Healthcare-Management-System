import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { BreadcrumbComponent } from '../../ui/breadcrumb/breadcrumb.component';
import { LayoutService } from '../../../services/layout.service';
import { CustomizerComponent } from "../../ui/customizer/customizer.component";

@Component({
  selector: 'app-content',
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent, BreadcrumbComponent, FooterComponent,CustomizerComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})

export class ContentComponent {
  constructor(public layoutService: LayoutService){}
}
