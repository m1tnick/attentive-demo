import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DogBreedVM } from '../../model/DogBreedVM';



export class Merda {
  bomba: DogBreedVM = undefined;
}


@Component({
  selector: 'dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {

  @Input()
  dogBreeds: DogBreedVM[];

  dogForm : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dogForm = this.fb.group(new Merda());
    this.dogForm.get('bomba').setValidators(Validators.required);

		this.dogForm.valueChanges.subscribe((val: DogBreedVM) => {
			console.log(val.breed)
		});
  }

}
