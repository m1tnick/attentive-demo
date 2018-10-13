import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatComponent } from './cat.component';
import { SharedModule } from '../shared/shared.module';

import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CatComponent', () => {
  let component: CatComponent;
  let fixture: ComponentFixture<CatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
      declarations: [ CatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
