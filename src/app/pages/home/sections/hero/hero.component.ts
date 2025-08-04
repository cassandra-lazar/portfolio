import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  name: string = 'Cassandra Lazar';
  role: string = 'Frontend Developer';
  location: string = 'Romania, Remote';
  linkedinUrl: string = 'https://www.linkedin.com/in/cassandra-georgiana';
  cvUrl: string = '/Cassandra-CV.pdf';
}
