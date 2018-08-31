import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()

export class PlanetService {

    constructor(private httpClient: HttpClient) {}

    public getDefaultPlanet() {
        return this.httpClient.get<any>(`${environment.apiUrl.starwars}/planets/`);
    }

    public getPlanetsByUrl(url: string) {
        return this.httpClient.get<any>(url);
    }
}
