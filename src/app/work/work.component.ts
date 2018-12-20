import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  imgIndex: number = 0;
  screenshot: string = '';
  selectedWork: string[] = [];

  works: any[] = [
    {
      "name": "plato",
      "subtitle": "DevOps Tool",
      "banner": "../../assets/img/banner/plato/1.png",
      "content": "UI based DevOps tool.",
      "screenShots": [
        "../../assets/img/img/PLATO/dashboard.png",
        "../../assets/img/img/PLATO/2.png",
        "../../assets/img/img/PLATO/3.png",
        "../../assets/img/img/PLATO/4.png"
      ]
    },
    {
      "name": "tc factory",
      "subtitle": "DevOps Tool",
      "banner": "../../assets/img/banner/TC_factory/1.png",
      "content": "UI based DevOps tool.",
      "screenShots": [
        "../../assets/img/img/TC_factory screenshots/banner.jpg",
        "../../assets/img/img/TC_factory screenshots/Landing_page.png",
        "../../assets/img/img/TC_factory screenshots/left_sidenav.png",
        "../../assets/img/img/TC_factory screenshots/release_screen.png",
        "../../assets/img/img/TC_factory screenshots/flowchart.png",
        "../../assets/img/img/TC_factory screenshots/editing1.png",
        "../../assets/img/img/TC_factory screenshots/editing2.png",
        "../../assets/img/img/TC_factory screenshots/transaction.png"
      ]
    },
    {
      "name": "Tracko",
      "subtitle": "DevOps Tool",
      "banner": "../../assets/img/banner/TC_factory/1.png",
      "content": "UI based DevOps tool.",
      "screenShots": [
        "../../assets/img/img/Tracko Screenshots/banner.jpg",
        "../../assets/img/img/Tracko Screenshots/Screen1.png",
        "../../assets/img/img/Tracko Screenshots/Screen2.png",
        "../../assets/img/img/Tracko Screenshots/Screen3.png",
        "../../assets/img/img/Tracko Screenshots/Screen4.png",
        "../../assets/img/img/Tracko Screenshots/Screen5.png",
        "../../assets/img/img/Tracko Screenshots/Screen6.png",
        "../../assets/img/img/Tracko Screenshots/Screen7.png",
        "../../assets/img/img/Tracko Screenshots/Screen8.png"
      ]
    },
    {
      "name": "portfolio",
      "subtitle": "Template",
      "banner": "../../assets/img/img/portfolio/banner.jpg",
      "content": "Template using Angular.",
      "screenShots": [
        "../../assets/img/img/Tracko Screenshots/banner.jpg",
        "../../assets/img/img/Tracko Screenshots/Screen1.png",
        "../../assets/img/img/Tracko Screenshots/Screen2.png",
        "../../assets/img/img/Tracko Screenshots/Screen3.png",
        "../../assets/img/img/Tracko Screenshots/Screen4.png",
        "../../assets/img/img/Tracko Screenshots/Screen5.png",
        "../../assets/img/img/Tracko Screenshots/Screen6.png",
        "../../assets/img/img/Tracko Screenshots/Screen7.png",
        "../../assets/img/img/Tracko Screenshots/Screen8.png"
      ]
    }
  ];

  services: any[] = [
    {
      "name": "web development",
      "img": "../../assets/img/web-dev1.jpg",
      "link": "https://en.wikipedia.org/wiki/Web_development"
    },
    {
      "name": "full stack development",
      "img": "../../assets/img/full stack-1.jpg",
      "link": "https://www.laurencegellert.com/2012/08/what-is-a-full-stack-developer/"
    },
    {
      "name": "web design",
      "img": "../../assets/img/web-design1.jpg",
      "link": "https://en.wikipedia.org/wiki/Web_design"
    }
  ];

  constructor( private _router: Router ) { }

  ngOnInit() { }

  selectWork(myWork: any) {
    this.selectedWork = myWork.screenShots;
    console.log(this.selectedWork);
    this.screenshot = this.selectedWork[0];
    // document.getElementById('picModal01').style.display = 'block';
    this._router.navigate(['img-gallery', myWork.name]);
  }
}
