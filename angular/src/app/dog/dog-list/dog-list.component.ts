import { Component, OnInit } from '@angular/core';
import { DogBreedVM } from '../model/DogBreedVM';
import { Observable } from 'rxjs';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: []
})
export class DogListComponent implements OnInit {

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
