import { Component, OnInit } from '@angular/core';
import { CountryItemComponent } from "../country-item/country-item.component";
import { CountriesService } from '../shared/services/countries.service';
import { Country } from '../shared/interfaces/country';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-countries-listing',
    standalone: true,
    templateUrl: './countries-listing.component.html',
    styleUrl: './countries-listing.component.css',
    imports: [CountryItemComponent, CommonModule]
})

export class CountriesListingComponent implements OnInit {

  countries: Country[] = [];


  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
      this.countriesService.getCountries().subscribe((countries) => {
        this.countries = countries;
      });

     console.log(this.filterListing(''))
  }

  // filterListing(value: string): Country[] {
  //   return this.countries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()));
  // }

}
