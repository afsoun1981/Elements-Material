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
import { ElErwinChannelParameterComponent } from './el-erwin-channel-parameter.component';

describe('Component: ElErwinChannelParameter', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ElErwinChannelParameterComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ElErwinChannelParameterComponent],
      (component: ElErwinChannelParameterComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ElErwinChannelParameterComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ElErwinChannelParameterComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-el-erwin-channel-parameter></app-el-erwin-channel-parameter>
  `,
  directives: [ElErwinChannelParameterComponent]
})
class ElErwinChannelParameterComponentTestController {
}

