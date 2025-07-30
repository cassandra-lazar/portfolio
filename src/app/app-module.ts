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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [AppComponent],
})
export class AppModule {}
