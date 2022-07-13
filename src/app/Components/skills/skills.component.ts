import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private profileservices:ProfileService) { }
  skills:any=[]
  ngOnInit(): void {
    Aos.init();
    this.skills=this.profileservices.Skills();
  }

}
