import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service';
import { DogBreedVM } from '../model/DogBreedVM';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dogBreeds$: Observable<DogBreedVM[]>;

  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    this.dogBreeds$ = this.dogsService.getDogBreeds();
  }

}
