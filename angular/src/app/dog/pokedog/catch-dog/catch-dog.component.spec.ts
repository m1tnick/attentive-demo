import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchDogComponent } from './catch-dog.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('CatchDogComponent', () => {
  let component: CatchDogComponent;
  let fixture: ComponentFixture<CatchDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ 
        CatchDogComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
