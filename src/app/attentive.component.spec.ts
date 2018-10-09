import { TestBed, async } from '@angular/core/testing';
import { AttentiveComponent } from './attentive.component';
describe('AttentiveComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AttentiveComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AttentiveComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Attentive Demo'`, async(() => {
    const fixture = TestBed.createComponent(AttentiveComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Attentive Demo');
  }));
});
