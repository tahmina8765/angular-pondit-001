import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  email: string = "tahmina@mailinator.com";
  message: string;
  
  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {

  }

  OnSubmit(formdata: NgForm){
    console.log(formdata.value);
    this.db.list('contacts').push(formdata.value);
  }
}
