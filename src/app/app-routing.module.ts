import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { EductionsComponent } from './Components/eductions/eductions.component';
import { ExperiencesComponent } from './Components/experiences/experiences.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { SkillsComponent } from './Components/skills/skills.component';

const routes: Routes = [
// {path:'',component:HeaderComponent},
// {path:'about',component:AboutComponent},
// {path:'experiences',component:ExperiencesComponent},
// {path:'projects',component:ProjectsComponent},
// {path:'skills',component:SkillsComponent},
// {path:'contact',component:ContactComponent},
// {path:'skills',component:SkillsComponent},
// {path:'eductions',component:EducationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
