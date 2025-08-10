import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeSection: string = 'home';

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
}
