import { Component } from '@angular/core';
import { SOCIAL_INFO } from '../../../../shared/constants/social-info.constant';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  socialInfo = SOCIAL_INFO;
}
