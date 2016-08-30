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
import { ElErwinChannelsComponent } from './el-erwin-channels.component';

describe('Component: ElErwinChannels', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ElErwinChannelsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ElErwinChannelsComponent],
      (component: ElErwinChannelsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ElErwinChannelsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ElErwinChannelsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-el-erwin-channels></app-el-erwin-channels>
  `,
  directives: [ElErwinChannelsComponent]
})
class ElErwinChannelsComponentTestController {
}

