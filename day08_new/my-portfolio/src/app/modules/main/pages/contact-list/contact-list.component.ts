import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contactlist;
  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
     this.db.list('contacts').valueChanges().subscribe(
       data => {
        this.contactlist = data;
       }
     )
  }


}
