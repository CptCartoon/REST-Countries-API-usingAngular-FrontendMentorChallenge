import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CountryItemComponent } from "../country-item/country-item.component";
import { CountriesService } from '../shared/services/countries.service';
import { Country } from '../shared/interfaces/country';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from "../shared/pipes/search-filter.pipe";
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-countries-listing',
    standalone: true,
    templateUrl: './countries-listing.component.html',
    styleUrl: './countries-listing.component.css',
    imports: [FormsModule, CountryItemComponent, CommonModule, SearchFilterPipe]
})

export class CountriesListingComponent implements OnInit {

  inputTextValue!: string;
  countries: Country[] = [];

  searchText = '';
  selectRegion = "filterByRegion";

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
      this.countriesService.getCountries().subscribe((countries) => {
        this.countries = countries;
      });
      console.log(this.countries.filter(country => country.region === this.selectRegion))
  }

  getFilteredByRegion() {
    if(this.selectRegion === 'filterByRegion') {
      return this.countries;
    }
    return this.countries.filter(country => country.region === this.selectRegion);
  }

  getFilterListing(value?: string): Country[] {
    
    if(value) {
      return this.getFilteredByRegion().filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()));
    }
    return this.getFilteredByRegion();
  }



}
