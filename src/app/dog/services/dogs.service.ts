import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DogBreedVM } from '../model/DogBreedVM';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const dogListUrl = ' https://dog.ceo/api/breeds/list/all';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  constructor(private http: HttpClient) { }

  getDogBreeds(): Observable<DogBreedVM[]> {
    return this.http.get<[DogBreedVM]>(dogListUrl).pipe(
      map((data: any) => this.toDogBreedVM(data.message)));
  }
  

  private toDogBreedVM(breeds): DogBreedVM[] {
    var dogBreeds: DogBreedVM[] = new Array<DogBreedVM>();

    for (let key in breeds) {
      dogBreeds.push(new DogBreedVM(key, breeds[key]));
    }

    return dogBreeds;
  }
}
