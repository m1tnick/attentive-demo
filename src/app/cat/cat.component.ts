import { Component, OnInit } from '@angular/core';
import { CatService } from './services/cat.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  randomCat;
  private loadingImg = new BehaviorSubject<boolean>(false);
	public loading$ = this.loadingImg.asObservable();

  constructor(private catService: CatService) { }

  ngOnInit() {
  }

  getRandomCat() {
    this.randomCat = null;
    this.loadingImg.next(true);
    this.catService.getRandomCat().subscribe(response => this.randomCat = response);
  }

  onImgLoaded() {
    this.loadingImg.next(false);
    console.log("POP")
  }

}
