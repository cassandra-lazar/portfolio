import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/home/sections/about-me/about-me.component';
import { SkillsComponent } from './pages/home/sections/skills/skills.component';
import { ProjectsComponent } from './pages/home/sections/projects/projects.component';
import { ContactComponent } from './pages/home/sections/contact/contact.component';
import { HeaderComponent } from './pages/home/sections/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeuix/themes/aura';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { ScrollTopModule } from 'primeng/scrolltop';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { AnimatedBackgroundComponent } from './shared/components/animated-background/animated-background.component';
import { GlowCardComponent } from './shared/components/glow-card/glow-card.component';
import { HeroComponent } from './pages/home/sections/hero/hero.component';
import { CopyToClipboardDirective } from './shared/directives/copy-to-clipboard.directive';
import { TitleComponent } from './shared/components/title/title.component';
import { Timeline } from 'primeng/timeline';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const PRIME_MODULES = [
  ButtonModule,
  CardModule,
  MenubarModule,
  DividerModule,
  InputTextModule,
  ToastModule,
  MessageModule,
  TagModule,
  DialogModule,
  ScrollTopModule,
  TooltipModule,
  RippleModule,
  ProgressBarModule,
  Timeline,
  AnimateOnScrollModule 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent,
    AnimatedBackgroundComponent,
    GlowCardComponent,
    HeroComponent,
    CopyToClipboardDirective,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...PRIME_MODULES,
  ],
  exports: [CopyToClipboardDirective],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false || 'none',
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
