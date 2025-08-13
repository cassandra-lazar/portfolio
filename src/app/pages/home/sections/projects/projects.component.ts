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
      title: 'Store Management',
      description: `Developed an internal web application designed for employees of a fictional company to efficiently manage active products and stores. The platform enables users from different departments to view existing listings and create new ones, allowing them to plan the distribution of specific product quantities to one or multiple company stores. Focused on implementing both user interface and core business logic, ensuring usability and performance.`,
      images: [
        '/images/yuna1.png',
        '/images/yuna2.png',
        '/images/yuna3.png',
        '/images/yuna4.png',
        '/images/yuna5.png',
      ],
    },
    {
      id: '2',
      title: 'Task Management',
      description: `Created a task management web application for organizing and tracking department-specific activities within a fictional company. Users can create tasks for teams such as design or development, assign statuses, set priorities, and monitor progress. Designed to improve collaboration and workflow transparency, the platform supports clear task organization, efficient communication, and real-time updates across departments.`,
      images: ['/images/wb1.png', '/images/wb2.png', '/images/wb3.png'],
    },
    {
      id: '3',
      title: 'Global Travel Retail',
      description: `Contributed to multiple interconnected web applications for a global travel retailer operating in over 60 countries with approximately 2,200 stores located in airports, cruise ships, seaports, and other tourist destinations. Each application served a specific role in the retail ecosystem, supporting product management, inventory tracking, and store operations. Initiated and developed one application from scratch using Angular, focusing on modularity, scalability, and a responsive user interface. Collaborated closely with UX designers and backend developers to integrate REST APIs and deliver a seamless, high-performance experience tailored to an international user base.`,
      images: [],
    },
    {
      id: '4',
      title: 'Company Website',
      description: `Developed a modern and responsive corporate presentation website for a company, strictly following provided design guidelines. Implemented UI components and ensured cross-browser compatibility and mobile responsiveness using Angular. Collaborated with the design team to faithfully translate visual concepts into interactive web elements, resulting in a polished and professional online presence.`,
      images: [],
    },
    {
      id: '5',
      title: 'Internal Employee Management',
      description: `Designed and developed an internal web application for employee management, including features such as leave tracking, manager assignments, and other HR-related functionalities. Led the UI/UX design process based on direct discussions with business stakeholders, creating an intuitive and efficient interface. Implemented the front-end entirely in Angular, ensuring smooth user interactions and maintainability.`,
      images: [],
    },
    {
      id: '6',
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
