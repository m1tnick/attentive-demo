import { Component, OnInit, Input } from '@angular/core';
import { DogBreedVM } from '../model/DogBreedVM';

@Component({
  selector: 'dog-image',
  templateUrl: './dog-image.component.html',
  styleUrls: ['./dog-image.component.css']
})
export class DogImageComponent implements OnInit {
  
  @Input()
  breedName: string;
  @Input()
  imageUrl: URL; 

  constructor() { }

  ngOnInit() {
  }

}
