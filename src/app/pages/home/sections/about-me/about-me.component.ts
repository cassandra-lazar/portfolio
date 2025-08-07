import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: false,
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  education = [
    {
      year: '2019-2022',
      title: 'Titu Maiorescu University, Bucharest',
      description: 'Informatics',
    },
    {
      year: '2014-2017',
      title: 'Dimitrie Cantemir University, Bucharest',
      description: 'International Economic Relations',
    },
    {
      year: '2010-2014',
      title: 'Matei Basarab National College, Bucharest',
      description: 'Mathematics and Informatics',
    },
  ];

  experience = [
    {
      title: 'Frontend Developer',
      period: 'Jan 2022 – Sep 2024',
      description:
        'Leading frontend modules in Angular, building reusable components, custom directives and maintaining design consistency.',
    },

    {
      title: 'Junior Frontend Developer',
      period: 'Oct 2020 – Jul 2022',
      description:
        'Built small modules in Angular, worked on responsive layouts, started using SCSS and animations.',
    },
    {
      title: 'Intern Developer',
      period: 'Jul 2020 – Oct 2020',
      description:
        'Introduced to Angular framework, helped with UI bugfixing and learned Git basics.',
    },
  ];
}
