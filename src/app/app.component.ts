import { Component, signal } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected readonly title = signal('portfolio');

   ngOnInit() {
    AOS.init({
      duration: 1000
    });
  }
}
