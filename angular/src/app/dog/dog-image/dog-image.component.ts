import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'dog-image',
  templateUrl: './dog-image.component.html',
  styleUrls: ['./dog-image.component.css']
})
export class DogImageComponent implements OnChanges  {
  @Input()
  breedName: string;
  @Input()
  imageUrl: URL; 

  private loadingImg = new BehaviorSubject<boolean>(false);
	public loading$ = this.loadingImg.asObservable();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.loadingImg.next(true);
  }

  onImgLoaded() {
    this.loadingImg.next(false);
  }
}
