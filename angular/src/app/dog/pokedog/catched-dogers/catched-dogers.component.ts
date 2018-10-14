import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DogerVM } from '../model/DogerVM';

@Component({
  selector: 'catched-dogers',
  templateUrl: './catched-dogers.component.html',
  styleUrls: ['./catched-dogers.component.css']
})
export class CatchedDogersComponent implements OnInit {

  @Input()
  catchedDogers: DogerVM[];
  @Output()
  updateDoger = new EventEmitter<DogerVM>();
  @Output()
  deleteDoger = new EventEmitter<number>();  

  selectedDoger: DogerVM = null;

  constructor() { }

  ngOnInit() {
  }

  selectDoger(event: DogerVM) {
    this.selectedDoger = event;
  }

  throwUpdateDoger(doger: DogerVM) {
    this.updateDoger.emit(doger);
  }

  throwDeleteDoger(id: number) {
    this.selectedDoger = null;
    this.deleteDoger.emit(id);
  }
}
