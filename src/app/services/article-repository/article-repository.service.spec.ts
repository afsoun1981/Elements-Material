/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ArticleRepositoryService } from './article-repository.service';

describe('ArticleRepository Service', () => {
  beforeEachProviders(() => [ArticleRepositoryService]);

  it('should ...',
      inject([ArticleRepositoryService], (service: ArticleRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
