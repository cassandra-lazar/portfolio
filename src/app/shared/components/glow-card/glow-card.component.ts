import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-glow-card',
  standalone: false,
  templateUrl: './glow-card.component.html',
  styleUrl: './glow-card.component.scss',
})
export class GlowCardComponent {
  @Input() title: string = 'Card';
  @Input() description: string = 'card description';
  @Input() glowColor: string = '#98ff98';
  @Input() buttonText?: string = 'Explore';
  @Input() withButton?: boolean = false;
}
