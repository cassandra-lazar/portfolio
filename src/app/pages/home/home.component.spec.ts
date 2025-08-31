import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './sections/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { CopyToClipboardDirective } from '../../shared/directives/copy-to-clipboard.directive';
import { ReactiveFormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        TitleComponent,
        HeaderComponent,
        HeroComponent,
        AboutMeComponent,
        SkillsComponent,
        ProjectsComponent,
        ContactComponent,
        CopyToClipboardDirective,
      ],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
