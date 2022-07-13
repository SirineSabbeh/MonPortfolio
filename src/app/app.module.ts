import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AboutComponent } from './Components/about/about.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { EductionsComponent } from './Components/eductions/eductions.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ExperiencesComponent } from './Components/experiences/experiences.component';
import { FooterComponent } from './Components/footer/footer.component';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    ProjectsComponent ,
    ExperiencesComponent,
    FooterComponent,
    HeaderComponent,
    EductionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
