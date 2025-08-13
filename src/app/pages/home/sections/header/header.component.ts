import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MENU_ITEMS } from '../../../../shared/constants/menu-items.constant';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  mobile!: boolean;
  menuItems = MENU_ITEMS;
  activeSection: string = MENU_ITEMS[0].id;
  isMenuOpen = false;

  constructor(private displayService: DeviceDetectorService) {
    this.mobile = this.displayService.isMobile();
  }

  ngAfterViewInit() {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              this.activeSection = id;
            }
          }
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
