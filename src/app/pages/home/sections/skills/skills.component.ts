import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  mobile!: boolean;
  skills = [
    {
      title: '💻 Frontend Core',
      items: [
        { name: 'HTML', logo: 'images/html.png' },
        { name: 'CSS', logo: 'images/css.png' },
        { name: 'SCSS', logo: 'images/scss.svg' },
        { name: 'JavaScript', logo: 'images/javascript.png' },
        { name: 'TypeScript', logo: 'images/typescript.svg' },
        { name: 'JSON', logo: 'images/json.svg' },
        { name: 'REST API', logo: 'images/api.svg' },
      ],
    },
    {
      title: '🎨 UI Frameworks & Libraries',
      items: [
        { name: 'Angular', logo: 'images/angular.svg' },
        { name: 'PrimeNG', logo: 'images/primeng.svg' },
        { name: 'PrimeFlex', logo: 'images/primeflex.svg' },
        { name: 'Angular Material', logo: 'images/angular-material.svg' },
        { name: 'Bootstrap', logo: 'images/bootstrap.svg' },
        { name: 'Tailwind', logo: 'images/tailwind.svg' },
        { name: 'RxJS', logo: 'images/rxjs.svg' },
      ],
    },
    {
      title: '🛠 Tools & Workflow',
      items: [
        { name: 'Git', logo: 'images/git.svg' },
        { name: 'GitHub', logo: 'images/github.svg' },
        { name: 'npm & Node.js', logo: 'images/nodejs.svg' },
        { name: 'Postman', logo: 'images/postman.svg' },
        { name: 'WordPress', logo: 'images/wordpress.svg' },
      ],
    },
    {
      title: '🧪 Testing',
      items: [
        { name: 'Jest', logo: 'images/jest.svg' },
        { name: 'Karma', logo: 'images/karma.svg' },
        { name: 'Jasmine', logo: 'images/jasmine.svg' },
      ],
    },
    {
      title: '🎨 Design & Collaboration',
      items: [
        { name: 'Figma', logo: 'images/figma.svg' },
        { name: 'Canva', logo: 'images/canva.svg' },
      ],
    },
  ];

  allLogos = [
    { name: 'HTML', logo: 'images/html.png' },
    { name: 'CSS', logo: 'images/css.png' },
    { name: 'SCSS', logo: 'images/scss.svg' },
    { name: 'JavaScript', logo: 'images/javascript.png' },
    { name: 'TypeScript', logo: 'images/typescript.svg' },
    { name: 'Angular', logo: 'images/angular.svg' },
    { name: 'PrimeNG', logo: 'images/primeng.svg' },
    { name: 'PrimeFlex', logo: 'images/primeflex.svg' },
    { name: 'Angular Material', logo: 'images/angular-material.svg' },
    { name: 'Bootstrap', logo: 'images/bootstrap.svg' },
    { name: 'Tailwind', logo: 'images/tailwind.svg' },
    { name: 'Postman', logo: 'images/postman.svg' },
    { name: 'RxJS', logo: 'images/rxjs.svg' },
    { name: 'Jest', logo: 'images/jest.svg' },
    { name: 'Karma', logo: 'images/karma.svg' },
    { name: 'Jasmine', logo: 'images/asmine.svg' },
    { name: 'Git', logo: 'images/git.svg' },
    { name: 'GitHub', logo: 'images/github.svg' },
    { name: 'npm & Node.js', logo: 'images/nodejs.svg' },
    { name: 'WordPress', logo: 'images/wordpress.svg' },
    { name: 'REST API', logo: 'images/api.svg' },
    { name: 'Figma', logo: 'images/figma.svg' },
    { name: 'Canva', logo: 'images/canva.svg' },
    { name: 'JSON', logo: 'images/json.svg' },
  ];

  constructor(private displayService: DeviceDetectorService) {
    this.mobile = this.displayService.isMobile();
  }
}
