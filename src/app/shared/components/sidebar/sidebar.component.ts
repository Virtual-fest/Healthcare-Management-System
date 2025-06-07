import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {NavigationEnd, Router, RouterModule} from '@angular/router';
import {LogoComponent} from "../header/widgets/logo/logo.component";
import {FeatherIconComponent} from "../ui/feather-icon/feather-icon.component";
import {SvgIconComponent} from "../ui/svg-icon/svg-icon.component";
import {items, menuItems} from '../../data/menu';
import {Menu} from '../../interface/menu';
import {LayoutService} from '../../services/layout.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule,
            LogoComponent, FeatherIconComponent, SvgIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {

  public menuItems = menuItems;
  public items = items;
  public leftArrow: boolean = false;
  public rightArrow: boolean = true;
  public pinedItem: Menu[] = [];

  constructor(private router: Router, public layoutService: LayoutService) {
    this.items.subscribe(menuItems => {
      this.menuItems = menuItems;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const urlTree = this.router.parseUrl(event.url);
          const cleanPath = '/' + urlTree.root.children['primary']?.segments.map(segment => segment.path).join('/');
  
          menuItems.filter(items => {
            if (items.path === cleanPath) {
              this.setNavActive(items);
            }
            if (!items.children) { return false; }
            items.children.filter(subItems => {
              if (subItems.path === cleanPath) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) { return false; }
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === cleanPath) {
                  this.setNavActive(subSubItems);
                }
              });
            });
          });
        }
      });
    });
  }  

  setNavActive(items: Menu) {
    this.menuItems.filter(menuItem => {
      if (menuItem !== items) {
        menuItem.active = false;
      } else {
        menuItem.active = true;
        setTimeout(() => {
          this.scroll(items)
        }, 2000);
      }
      
      
      if (menuItem.children && menuItem.children.includes(items)) {
        menuItem.active = true;
        setTimeout(() => {
          this.scroll(menuItem)
        }, 2000);
      }

      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(items)) {
            menuItem.active = true;
            submenuItems.active = true;
            setTimeout(() => {
              this.scroll(menuItem)
            }, 2000);
          }
        });
      }
    });
  }

  /**
   * Toggles the active state of a menu item.
   * If activating, deactivate all other menu items and their submenus.
   * @param item Menu item to toggle.
   */
  toggleMenu(item: Menu) {
    if (!item.active) {
      this.menuItems.forEach((menu) => {
        if (this.menuItems.includes(item)) {
          menu.active = false
        }
        if (!menu.children) {
          return false;
        }

        menu.children.forEach((subMenu) => {
          if (menu.children?.includes(item)) {
            subMenu.active = false
          }

          if (subMenu.children) {
            subMenu.children.forEach((details) => {
              if (subMenu.children?.includes(item)) {
                details.active = false;
              }
            })
          }
        })
      })
    }
    item.active =! item.active;
  }

  scrollLeft() {
    this.rightArrow = true;
    if (this.layoutService.margin != 0) {
      this.layoutService.margin = this.layoutService.margin + 500;
    }

    if (this.layoutService.margin == 0) {
      this.leftArrow = false;
    }
  }

  scrollRight() {
    this.leftArrow = true;
    if (this.layoutService.margin != this.layoutService.scrollMargin) {
      this.layoutService.margin = this.layoutService.margin - 500;
    }
    if (this.layoutService.margin == this.layoutService.scrollMargin) {
      this.rightArrow = false;
    }
  }

  closeSidebar() {
    this.layoutService.closeSidebar = true;
  }

  /**
   * Toggles the pinned state of a menu item.
   * If the item is not pinned, pins it and adds to pinedItem.
   * If already pinned, unpins and removes from pinedItem.
   * Scroll the item into view after toggling.
   * @param item Menu item to pin or unpin.
   */
  pined(item: Menu): void {
    if (!item.pined) {
      item.pined = true;
      if (!this.pinedItem.includes(item)) {
        this.pinedItem.push(item);
      }
    } else {
      item.pined = false;
      const idx = this.pinedItem.indexOf(item);
      if (idx !== -1) {
        this.pinedItem.splice(idx, 1);
      }
    }
    this.scroll(item);
  }

  /**
   * Smoothly scrolls the sidebar menu item into view if it exists.
   * @param item Menu item with an 'id' property corresponding to a DOM element's id.
   */
  scroll(item: Menu): void {
    if (!item?.id) return;
    const scrollDiv = document.getElementById(item.id);
    if (scrollDiv) {
      setTimeout(() => {
        scrollDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }
}
