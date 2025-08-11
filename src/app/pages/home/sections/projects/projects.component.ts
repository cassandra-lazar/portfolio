import { Component } from '@angular/core';
import { ImagePreviewService } from '../../../../shared/services/image-preview.service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: any[] = [
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      description: 'Personal portfolio built with Angular, featuring smooth animations and a responsive design.',
      link: 'https://example.com',
      images: [
        'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
        'assets/projects/portfolio2.png'
      ]
    },
    {
      id: 'weather',
      title: 'Weather API App',
      description: 'An app that integrates with a public API to display real-time weather data.',
      link: 'https://example.com'
    },
    {
      id: 'store',
      title: 'E-commerce Store',
      description: 'Full stack store with cart, checkout, and admin panel.',
      images: [
        'assets/projects/store1.png'
      ]
    }
  ];
  constructor(private previewService: ImagePreviewService) {}

  selectedProject: any = this.projects[0];

  selectProject(project: any) {
    this.selectedProject = project;
  }


  previewImage: string | null = null;

// openPreview(img: string) {
//   this.previewImage = img;
// }

closePreview() {
  this.previewImage = null;
}
 openPreview(img: string) {
    this.previewService.open(img);
  }
}
