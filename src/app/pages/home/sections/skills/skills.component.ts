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
      title: '💻 Core Frontend',
      items: [
        { name: 'HTML', logo: 'images/html.png' },
        { name: 'CSS', logo: 'images/css.png' },
        { name: 'SCSS', logo: 'images/scss.png' },
        { name: 'JavaScript', logo: 'images/javascript.png' },
        { name: 'TypeScript', logo: 'images/typescript.png' },
        { name: 'JSON', logo: 'images/json.png' },
        { name: 'REST API', logo: 'images/restapi.png' },
      ],
    },
    {
      title: '⚛️ Frameworks & Libraries',
      items: [
        { name: 'Angular', logo: 'images/angular.png' },
        { name: 'RxJS', logo: 'images/rxjs.png' },
        { name: 'PrimeNG', logo: 'images/primeng.png' },
        { name: 'PrimeFlex', logo: 'images/primeflex.jpg' },
        { name: 'Angular Material', logo: 'images/angular-material.png' },
        { name: 'Bootstrap', logo: 'images/bootstrap.png' },
        { name: 'Tailwind CSS', logo: 'images/tailwind.png' },
      ],
    },
    {
      title: '🛠 Tools & Platforms',
      items: [
        { name: 'Git', logo: 'images/git.png' },
        { name: 'GitHub', logo: 'images/github.png' },
        { name: 'npm', logo: 'images/npm.png' },
        { name: 'Node.js', logo: 'images/nodejs.png' },
        { name: 'Postman', logo: 'images/postman.png' },
        { name: 'WordPress', logo: 'images/wordpress.png' },
      ],
    },
    {
      title: '🧪 Testing & QA',
      items: [
        { name: 'Jest', logo: 'images/jest.png' },
        { name: 'Karma', logo: 'images/karma.png' },
        { name: 'Jasmine', logo: 'images/jasmine.png' },
      ],
    },
    {
      title: '🎨 Design & Collaboration',
      items: [
        { name: 'Figma', logo: 'images/figma.png' },
        { name: 'Canva', logo: 'images/canva.png' },
      ],
    },
  ];
  allLogos: any = [];
  pauseBanner = false;
  slideTrackWidth: number = 0;
  slideWidth = 200;
  constructor(private displayService: DeviceDetectorService) {
    this.mobile = this.displayService.isMobile();
  }

  ngOnInit() {
    this.allLogos = this.extractLogos();
    this.slideTrackWidth = this.allLogos.length * this.slideWidth * 2;
  }

  extractLogos() {
    return this.skills.flatMap((logo) => logo.items);
  }

  onMouseEnter() {
    this.pauseBanner = true;
  }

  onMouseLeave() {
    this.pauseBanner = false;
  }
}
