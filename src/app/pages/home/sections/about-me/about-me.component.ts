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
}
