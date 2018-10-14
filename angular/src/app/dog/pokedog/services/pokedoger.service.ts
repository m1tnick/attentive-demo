import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DogerVM } from '../model/DogerVM';

const dogerUrl = 'http://localhost:8000/doger/';
const findRandomDogerUrl = 'http://localhost:8000/doger/random';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class PokeDogerService {
  constructor(private http: HttpClient) { }

  searchDoger(): Observable<DogerVM> {
    return this.http.get<DogerVM>(findRandomDogerUrl);
  }

  catchDoger(doger: DogerVM): Observable<DogerVM> {
    return this.http.post<DogerVM>(dogerUrl, doger, httpOptions);
  }

  readAllDoger(): Observable<DogerVM[]> {
    return this.http.get<DogerVM[]>(dogerUrl);
  }
  

}
