import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var getParticle: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private _router: Router ) { }

  ngOnInit() {
    getParticle();
  }

  routing(path: string) {
    this._router.navigate([path]);
  }

}
