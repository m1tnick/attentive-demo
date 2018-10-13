import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const catRandomUrl = 'https://aws.random.cat/meow';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { 
  }

  getRandomCat(): Observable<any> {
    return this.http.get(catRandomUrl).pipe(map((response: any) => response.file));
  }
}
