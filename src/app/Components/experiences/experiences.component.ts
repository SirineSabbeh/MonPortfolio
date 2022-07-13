import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/Services/profile.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  constructor(private ProfileService :ProfileService ) { }
  exps:any=[]
  ngOnInit(): void {
    AOS.init();
    this.exps=this.ProfileService.exprience();

  }

}
