import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogImageComponent } from './dog-image.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('DogImageComponent', () => {
  let component: DogImageComponent;
  let fixture: ComponentFixture<DogImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ DogImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
