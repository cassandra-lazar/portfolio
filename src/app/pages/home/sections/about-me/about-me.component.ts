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
  description: `Developed responsive web applications and websites using Angular, PrimeNG, and Material UI. Implemented both UI and complex frontend logic, collaborating with the design team for UX and with backend developers for API integration. Wrote unit tests to ensure code quality and delivered large-scale projects on time in a cross-functional team environment.`
},

{
  title: 'Junior Frontend Developer',
  period: 'Oct 2020 – Jul 2022',
  description: `Built and maintained features for websites and advanced web applications using HTML, CSS, and Angular. Worked on both UI and application logic, collaborating with designers and backend developers to deliver functional, high-quality solutions.`
},

{
  title: 'Intern Developer',
  period: 'Jul 2020 – Oct 2020',
  description: `Assisted in implementing UI and frontend logic for websites and internal applications. Collaborated with developers and designers to deliver user-friendly, reliable features.`
}



  ];
}
