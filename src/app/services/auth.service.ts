import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()

export class AuthService {

    constructor(private httpClient: HttpClient) {}

    public getUser(username: string) {
        return this.httpClient.get<any>(`${environment.apiUrl.starwars}/people/?search=${username}`);
    }
}
