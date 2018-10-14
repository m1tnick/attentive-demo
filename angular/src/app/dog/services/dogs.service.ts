import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DogBreedVM } from '../model/DogBreedVM';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// const dogListUrl = ' https://dog.ceo/api/breeds/list/all';
// const breedImageUrl = 'https://dog.ceo/api/breed/:breedName/images/random';
const dogListUrl = 'http://localhost:8000/dogs';
const breedImageUrl = 'http://localhost:8000/dogs/:breedName';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  constructor(private http: HttpClient) { }

  getDogBreeds(): Observable<DogBreedVM[]> {
    return this.http.get<[DogBreedVM]>(dogListUrl).pipe(
      map((data: any) => this.toDogBreedVM(data.message)));
  }

  getBreedImage(breedName: string): Observable<any> {
    const resolvedUrl = breedImageUrl.replace(":breedName", breedName);
    //let params = new HttpParams().set("breedName",breedName);

    return this.http.get(resolvedUrl).pipe(
      map((data: any) => new URL(data.message))
    );
  }
  

  private toDogBreedVM(breeds): DogBreedVM[] {
    var dogBreeds: DogBreedVM[] = new Array<DogBreedVM>();

    for (let key in breeds) {
      let dog = new DogBreedVM();
      dog.breed = key;
      dog.subBreed = breeds[key];
      dogBreeds.push(dog);
    }

    return dogBreeds;
  }
}
