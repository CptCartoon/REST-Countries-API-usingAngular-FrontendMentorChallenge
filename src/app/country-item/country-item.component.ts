import { Component, Input } from '@angular/core';
import { CountriesListingComponent } from '../countries-listing/countries-listing.component';
import { Country } from '../shared/interfaces/country';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-country-item',
  standalone: true,
  imports: [CommonModule, CountriesListingComponent, RouterModule],
  templateUrl: './country-item.component.html',
  styleUrl: './country-item.component.css'
})
export class CountryItemComponent {
  @Input() country!: Country;

  
}
