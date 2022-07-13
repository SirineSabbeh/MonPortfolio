import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-eductions',
  templateUrl: './eductions.component.html',
  styleUrls: ['./eductions.component.css']
})
export class EductionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
    }

}
