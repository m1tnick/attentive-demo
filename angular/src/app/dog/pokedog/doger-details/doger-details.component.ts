import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DogerVM } from '../model/DogerVM';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'doger-details',
  templateUrl: './doger-details.component.html',
  styleUrls: ['./doger-details.component.css']
})
export class DogerDetailsComponent implements OnInit, OnChanges {

  @Input()
  doger: DogerVM;
  @Output()
  updateDoger = new EventEmitter<DogerVM>();
  @Output()
  deleteDoger = new EventEmitter<string>();

  dogerForm : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setUpForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setUpForm();
  } 

  setUpForm() {
    this.dogerForm = this.fb.group(this.doger);
    this.dogerForm.get('breed').disable();
    this.dogerForm.get('name').setValidators(Validators.required);
    this.dogerForm.get('name').valueChanges.subscribe(val => {
			this.doger.name= val;
		});
  }

  onSubmit() {
    this.updateDoger.emit(this.doger);
  }

  onDelete() {
    this.deleteDoger.emit(this.doger.id);
  }  

}
