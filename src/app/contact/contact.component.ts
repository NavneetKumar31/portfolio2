import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var myMap: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor( private _formBuilder: FormBuilder ) { }

  ngOnInit() {
    myMap();
    this.contactForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email ]],
      msg: ['', Validators.required ]
    });
  }

  sendMsg() {
    this.contactForm.reset();
    // console.log(this.contactForm);
  }

}
