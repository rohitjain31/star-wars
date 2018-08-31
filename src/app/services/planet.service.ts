import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()

export class PlanetService {

    constructor(private httpClient: HttpClient) {}

    public getDefaultPlanet() {
        return this.httpClient.get<any>(`${environment.apiUrl.starwars}/planets/`);
    }

    public getPlanetsByUrl(url: string) {
        return this.httpClient.get<any>(url);
    }

    public searchPlanet(terms: Observable<string>) {
        return terms.debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => this.searchEntries(term));
    }

    private searchEntries(term) {
        return this.httpClient.get<any>(`${environment.apiUrl.starwars}/planets/?search=${term}`);
  }
}
