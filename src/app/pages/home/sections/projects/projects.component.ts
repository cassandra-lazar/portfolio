import { Component } from '@angular/core';
import { ImagePreviewService } from '../../../../shared/services/image-preview.service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: any[] = [
    {
      id: '1',
      title: 'Global Travel Retail',
      description: `Contributed to multiple interconnected web applications for a global travel retailer operating in over 60 countries with approximately 2,200 stores located in airports, cruise ships, seaports, and other tourist destinations. Each application served a specific role in the retail ecosystem, supporting product management, inventory tracking, and store operations. Initiated and developed one application from scratch using Angular, focusing on modularity, scalability, and a responsive user interface. Collaborated closely with UX designers and backend developers to integrate REST APIs and deliver a seamless, high-performance experience tailored to an international user base.`,
      link: 'https://example.com',
      images: [],
    },
    {
      id: '2',
      title: 'Corporate Presentation Website',
      description: `Developed a modern and responsive corporate presentation website for a company, strictly following provided design guidelines. Implemented UI components and ensured cross-browser compatibility and mobile responsiveness using Angular. Collaborated with the design team to faithfully translate visual concepts into interactive web elements, resulting in a polished and professional online presence.`,
      images: [],
    },
    {
      id: '3',
      title: 'Internal Employee Management System',
      description: `Designed and developed an internal web application for employee management, including features such as leave tracking, manager assignments, and other HR-related functionalities. Led the UI/UX design process based on direct discussions with business stakeholders, creating an intuitive and efficient interface. Implemented the front-end entirely in Angular, ensuring smooth user interactions and maintainability.`,
      images: [],
    },
    {
      id: '4',
      title: 'Book Publishing Website',
      description: `Participated in the rebranding of a WordPress website dedicated to authors and their books. The platform helps authors publish and promote their works. Updated the site's design to reflect the new brand identity, improved usability, and ensured a consistent, engaging user experience for both authors and readers.`,
      images: [],
    },
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
