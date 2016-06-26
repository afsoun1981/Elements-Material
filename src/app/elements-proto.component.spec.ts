import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ElementsProtoAppComponent } from '../app/elements-proto.component';

beforeEachProviders(() => [ElementsProtoAppComponent]);

describe('App: ElementsProto', () => {
  it('should create the app',
    inject([ElementsProtoAppComponent], (app: ElementsProtoAppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'elements-proto works!\'',
    inject([ElementsProtoAppComponent], (app: ElementsProtoAppComponent) => {
      expect(app.title).toEqual('elements-proto works!');
    }));
});
