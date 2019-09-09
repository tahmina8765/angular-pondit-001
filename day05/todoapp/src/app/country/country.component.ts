import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countries:any;
  constructor(public countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountry().subscribe(
      data => {
        this.countries = data;
        console.log(data);
      }
    )
  }

}
