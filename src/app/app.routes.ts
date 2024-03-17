import { Routes } from '@angular/router';
import { CountriesListingComponent } from './countries-listing/countries-listing.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

export const routes: Routes = [
    {
        path: '',
        component: CountriesListingComponent,
        title: 'Countries API - Home Page'
    },
    {
        path: 'details/:name.common',
        component: CountryDetailsComponent,
        title: 'Country details'
    }
];
