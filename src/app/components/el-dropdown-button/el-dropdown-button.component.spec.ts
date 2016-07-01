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
import { ElDropdownButtonComponent } from './el-dropdown-button.component';

describe('Component: ElDropdownButton', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ElDropdownButtonComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ElDropdownButtonComponent],
      (component: ElDropdownButtonComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ElDropdownButtonComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ElDropdownButtonComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-el-dropdown-button></app-el-dropdown-button>
  `,
  directives: [ElDropdownButtonComponent]
})
class ElDropdownButtonComponentTestController {
}

