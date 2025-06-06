import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LayoutService {

  public closeSidebar: boolean = false;
  public fullScreen: boolean = false;
  public margin: number = 0;
  public scrollMargin: number = -4500;

  public config  = {
    settings: {
      layout_type: 'ltr',
      layout_version: 'light-only',
      sidebar_type: 'compact-sidebar compact-small material-icon',
      icon: "stroke-svg",
      layout: 'rome'
    },
    color: {
      primary: '#7366ff',
      secondary: '#838383',
    },
  };
}
