import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchedDogersComponent } from './catched-dogers.component';
import { MockComponent } from 'ng2-mock-component';

describe('CatchedDogersComponent', () => {
  let component: CatchedDogersComponent;
  let fixture: ComponentFixture<CatchedDogersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CatchedDogersComponent,
        MockComponent({
          selector: 'doger-details',
          inputs: ['doger']
        }),
        MockComponent({
          selector: 'group-viewer'
				}),
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchedDogersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
