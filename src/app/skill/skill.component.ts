import { Component, OnInit } from '@angular/core';

declare var getSkills: any;

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  skills = [
    'MEAN Stack',
    'Angular 2+',
    'Core Java',
    'Web Services',
    'JavaScript',
    'MongoDB',
    'MySQL',
    'HTML',
    'CSS',
    'Bootstrap'
  ];
  constructor() { }

  ngOnInit() {
    getSkills();
  }

}
