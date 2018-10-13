import { Component, OnInit } from '@angular/core';
import { DogsService } from './services/dogs.service';
import { DogBreedVM } from './model/DogBreedVM';
import { Observable, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dogBreeds$: Observable<DogBreedVM[]>;
  imageURL$: Observable<URL>;
  breedName: string;

  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    this.dogBreeds$ = this.dogsService.getDogBreeds();
  }

  onBreedSelected(event: string) {
    this.breedName = event;
    this.imageURL$ = this.dogsService.getBreedImage(event);
  }

}