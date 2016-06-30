/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Article} from './article.model';

describe('Article', () => {
  it('should create an instance', () => {
    expect(new Article()).toBeTruthy();
  });
});
