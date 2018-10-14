import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchDogComponent } from './catch-dog.component';

describe('CatchDogComponent', () => {
  let component: CatchDogComponent;
  let fixture: ComponentFixture<CatchDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchDogComponent ]
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
