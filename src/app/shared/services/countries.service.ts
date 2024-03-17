import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AfterContentInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl = 'https://restcountries.com/v3.1/';
  
  constructor(private http: HttpClient) {}

  countries: Country[] = []
  
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/all`)
  }

   getCountryByName(name: string) {
    this.getCountries().subscribe((countries) => {
      this.countries = countries;
    });

     return this.countries.find(country => country.name.common === name)
   }

   getCountriesArray() {
    this.getCountries().subscribe((countries) => {
      this.countries = countries;
    });
    return this.countries;
   }
}
