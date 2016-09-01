import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ElMiniErwinComponent } from './el-mini-erwin.component';

describe('Component: ElMiniErwin', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ElMiniErwinComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ElMiniErwinComponent],
      (component: ElMiniErwinComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ElMiniErwinComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ElMiniErwinComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-el-mini-erwin></app-el-mini-erwin>
  `,
  directives: [ElMiniErwinComponent]
})
class ElMiniErwinComponentTestController {
}

