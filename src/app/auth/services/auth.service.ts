import { BASE_URL } from './../../shared/const/url.const';
import { CurrentUserInterface } from './../../shared/types/currentUser.interface';
import { RegisterRequestInterface } from './../types/register.request.interface';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

    constructor(private readonly httpClient: HttpClient){}

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface>{

        const url = BASE_URL+ '/auth';

        return this.httpClient.post<CurrentUserInterface>(url, data)
    }
}