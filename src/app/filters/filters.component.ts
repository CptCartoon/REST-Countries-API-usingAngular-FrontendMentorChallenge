import { Component } from '@angular/core';
import { Country } from '../shared/interfaces/country';
import { CountriesService } from '../shared/services/countries.service';
import { CountriesListingComponent } from '../countries-listing/countries-listing.component';


@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CountriesListingComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {

  countriesService!: CountriesService;

  filterListing(value: string) {
    this.countriesService.
  }

}
