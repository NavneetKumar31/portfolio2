import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-img-gallery',
  templateUrl: './img-gallery.component.html',
  styleUrls: ['./img-gallery.component.scss']
})
export class ImgGAlleryComponent implements OnInit {

  imgIndex: number = 0;
  screenshot: string = '';
  selectedWork: string[] = [];
  private subcribtion: any;
  project_name: string;

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

  constructor( private _activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.subcribtion = this._activatedRoute.params.subscribe(params => {
      this.project_name = params['project_name'];
      console.log(this.project_name);
      this.works.forEach(work => {
        if (work.name === this.project_name) {
          this.selectedWork = work.screenShots;
        }
      });
    });
  }

  openModal(eleId: string) {
    this.screenshot = this.selectedWork[0];
    document.getElementById(eleId).style.display = 'block';
  }

  preScreenshot() {
    this.imgIndex--;
    if (this.imgIndex < 0) {
      this.screenshot = this.selectedWork[this.selectedWork.length - 1];
      this.imgIndex = this.selectedWork.length - 1;
    } else {
      this.screenshot = this.selectedWork[this.imgIndex];
    }
    console.log(this.screenshot + ' > ' + this.imgIndex);
  }

  nextScreenshot() {
    this.imgIndex++;
    if (this.imgIndex > (this.selectedWork.length - 1)) {
      this.imgIndex = 0;
      this.screenshot = this.selectedWork[0];
    } else {
      this.screenshot = this.selectedWork[this.imgIndex];
    }
    console.log(this.screenshot + ' > ' + this.imgIndex);
  }
}
