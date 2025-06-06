import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LayoutService {

  public closeSidebar: boolean = true;
  public fullScreen: boolean = false;
  public isLanguage: boolean = false;
  public isSearchOpen: boolean = false;
  public margin: number = 0;
  public scrollMargin: number = -4500;

  public config  = {
    settings: {
      layout_type: 'ltr',
      layout_version: 'light-only',
      sidebar_type: 'compact-wrapper',
      icon: "stroke-svg",
      layout: ''
    },
    color: {
      primary: '#7366ff',
      secondary: '#838383',
    },
  };

  applyLayout(layout: string) {    
    if(layout == 'dubai') {
      this.config.settings.sidebar_type = 'compact-wrapper';
    } else if(layout == 'los-angeles') {
      this.config.settings.sidebar_type = 'horizontal-wrapper material-type';
      this.scrollMargin = -5000;
    } else if(layout == 'singapore') {
      this.config.settings.sidebar_type = 'horizontal-wrapper enterprice-type';
    } else if(layout == 'newyork') {
      this.config.settings.sidebar_type = 'compact-wrapper box-layout';
    } else if(layout == 'seoul') {
      this.config.settings.sidebar_type = 'compact-wrapper modern-type';
    }
  }
}
