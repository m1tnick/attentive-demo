import { CatModule } from './cat.module';

describe('CatModule', () => {
  let catModule: CatModule;

  beforeEach(() => {
    catModule = new CatModule();
  });

  it('should create an instance', () => {
    expect(catModule).toBeTruthy();
  });
});
