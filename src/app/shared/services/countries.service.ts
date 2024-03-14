import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl = 'https://restcountries.com/v3.1/';
  
  countries: Country[] = [];

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/all`)
  }

  filterListing(value: string): Country[] {
    return this.countries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()));
  }

}
