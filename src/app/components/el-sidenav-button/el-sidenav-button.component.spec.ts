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
import { ElSidenavButtonComponent } from './el-sidenav-button.component';

describe('Component: ElSidenavButton', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ElSidenavButtonComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ElSidenavButtonComponent],
      (component: ElSidenavButtonComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ElSidenavButtonComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ElSidenavButtonComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-el-sidenav-button></app-el-sidenav-button>
  `,
  directives: [ElSidenavButtonComponent]
})
class ElSidenavButtonComponentTestController {
}

