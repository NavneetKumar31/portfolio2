import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var getSkills: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  myImages: String[] = [
    '../../assets/img/angular.png',
    '../../assets/img/mean.png',
    '../../assets/img/java.png',
    '../../assets/img/webservices.png'
  ];

  constructor( private _router: Router ) { }

  ngOnInit() {
    getSkills();
  }

  routing( path: string ) {
    this._router.navigate([path]);
  }

}
