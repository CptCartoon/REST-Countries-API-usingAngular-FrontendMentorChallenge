import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
  
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  countriesService = inject(CountriesService);
  countryDetails: Country | undefined;
  countryArray: Country[] | undefined;

  constructor(private location: Location) {

    const countryName = this.activatedRoute.snapshot.params['name.common'];
    const countries: Country[] = []
    this.countriesService.getCountries().subscribe((countries) => {
      this.countryDetails = countries.find(country => country.name.common === countryName)
    });

    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        const countryName = params.get('name.common');
        this.countryDetails = this.countriesService.getCountryByName(countryName!);
      },
    );
    this.countryArray = this.countriesService.getCountriesArray();
  }

  back(): void {
    this.router.navigate([this.location.back()])
  }

  navigate(border: string) {
    this.router.navigate(['details/', border])
  }

  getNativeName() {
    if(this.countryDetails?.altSpellings[2]) {
      return this.countryDetails?.altSpellings[2]
    }

    return this.countryDetails?.altSpellings[1]
  }
  
  getLanguages() {

    if(!this.countryDetails) {
      return;
    }

    const languages: string[] = []
    Object.keys(this.countryDetails?.languages).forEach(key => languages.push(this.countryDetails?.languages[key]));
    return languages.join(', ');
   }

   getBorders() {
    const countryBorders: string[] = [];
    if(!this.countryDetails?.borders) {
      return null;
    }

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