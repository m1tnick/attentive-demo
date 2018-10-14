import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng2-mock-component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DogListComponent } from './dog-list.component';

describe('DogListComponent', () => {
  let component: DogListComponent;
  let fixture: ComponentFixture<DogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ 
        DogListComponent,
        MockComponent({
					selector: 'group-viewer'
				}),
        MockComponent({
					selector: 'dog-form',
					inputs: ['dogBreeds']
        }),
        MockComponent({
					selector: 'dog-image',
					inputs: ['imageUrl', 'breedName']
				})
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
