import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../shared/services/countries.service';
import { Country } from '../shared/interfaces/country';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css'
})
export class CountryDetailsComponent {
  
  route: ActivatedRoute = inject(ActivatedRoute);

  countriesService = inject(CountriesService);
  countryDetails: Country | undefined;
  countryArray: Country[] | undefined;

  constructor(private location: Location) {
   const countryName = this.route.snapshot.params['name.common'];
   this.countryDetails = this.countriesService.getCountryByName(countryName);
   this.countryArray = this.countriesService.getCountriesArray();
   console.log(this.countryDetails)
  }
  
  back(): void {
    this.location.back();
  }
  
  getLanguages() {

    if(!this.countryDetails) {
      return;
    }

    const languages: string[] = []
    Object.keys(this.countryDetails?.languages).forEach(key => languages.push(this.countryDetails?.languages[key]));
    //console.log(this.countryDetails)
    return languages.join(', ');
   }

   getBorders() {
    const countryBorders: string[] = [];

    this.countryArray?.filter(country => this.countryDetails?.borders.includes(country.cca3) ? countryBorders.push(country.name.common) : null);
    return countryBorders;
   }

   getCurrencies() {

    if(!this.countryDetails) {
      return;
    }
    const currencies: string[] = []
    Object.keys(this.countryDetails?.currencies).forEach(key => currencies.push(this.countryDetails?.currencies[key]['name']));
 
    return currencies.join(', ')
   }
}