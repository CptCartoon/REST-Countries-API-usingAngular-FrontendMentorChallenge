import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FiltersComponent } from './filters/filters.component';
import { CountriesListingComponent } from "./countries-listing/countries-listing.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FiltersComponent, CountriesListingComponent]
})
export class AppComponent {
  title = 'rest-countries-api';
}
