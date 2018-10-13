import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng2-mock-component';

import { DogComponent } from './dog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DogComponent', () => {
  let component: DogComponent;
  let fixture: ComponentFixture<DogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ 
        DogComponent,
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
    fixture = TestBed.createComponent(DogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
