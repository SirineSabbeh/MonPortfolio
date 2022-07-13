import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private profileservices:ProfileService) { }
  projects:any=[]
  ngOnInit(): void {
    this.projects=this.profileservices.projects();
  }

}
