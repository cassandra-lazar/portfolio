import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: false,
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  @ViewChild('underlineRef', { static: true }) underlineRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = this.underlineRef.nativeElement;

          if (entry.isIntersecting) {
            this.renderer.addClass(el, 'animate-underline');
          } else {
            this.renderer.removeClass(el, 'animate-underline');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(this.underlineRef.nativeElement);
  }
}
