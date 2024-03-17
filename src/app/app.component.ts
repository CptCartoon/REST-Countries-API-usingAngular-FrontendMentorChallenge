import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { CountriesListingComponent } from "./countries-listing/countries-listing.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, CountriesListingComponent, RouterModule]
})

export class AppComponent {
  title = 'rest-countries-api';
}
