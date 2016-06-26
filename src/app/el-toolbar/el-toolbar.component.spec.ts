/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ElToolbarComponent } from './el-toolbar.component';

describe('Component: ElToolbar', () => {
  it('should create an instance', () => {
    let component = new ElToolbarComponent();
    expect(component).toBeTruthy();
  });
});
