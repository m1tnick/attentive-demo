import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DogBreedVM } from '../../model/DogBreedVM';

@Component({
  selector: 'dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {
  @Input()
  dogBreeds: DogBreedVM[];
  @Output()
	breedSelected = new EventEmitter<string>();

  dogForm : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
    this.dogForm = this.fb.group(new DogBreedVM());
    this.dogForm.get('breed').setValidators(Validators.required);

		this.dogForm.valueChanges.subscribe((val) => {
		});
  }

  onSubmit() {
    this.breedSelected.emit(this.dogForm.value.breed);
  }

}
