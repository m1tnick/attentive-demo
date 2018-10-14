import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DogerVM } from '../model/DogerVM';

@Component({
  selector: 'catch-dog',
  templateUrl: './catch-dog.component.html',
  styleUrls: ['./catch-dog.component.css']
})
export class CatchDogComponent implements OnInit {
  @Input()
  foundDoger: DogerVM;
  @Output()
  searchDoger = new EventEmitter();
  @Output()
  catchingDoger = new EventEmitter<DogerVM>();
  loadingImg = false;

  constructor() { }

  ngOnInit() {
  }

  findDoger() {
    this.loadingImg = true;
    this.searchDoger.emit();
  }

  catchDoger() {
    this.catchingDoger.emit(this.foundDoger);
    this.foundDoger = null;
  }

  onImgLoaded() {
    this.loadingImg = false;
  }

}
