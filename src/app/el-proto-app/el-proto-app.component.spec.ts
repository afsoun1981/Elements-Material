/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ElProtoAppComponent } from './el-proto-app.component';

describe('Component: ElProtoApp', () => {
  it('should create an instance', () => {
    let component = new ElProtoAppComponent();
    expect(component).toBeTruthy();
  });
});
