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
import { ElErwinSettingComponent } from './el-erwin-setting.component';

describe('Component: ElErwinSetting', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ElErwinSettingComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ElErwinSettingComponent],
      (component: ElErwinSettingComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ElErwinSettingComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ElErwinSettingComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-el-erwin-setting></app-el-erwin-setting>
  `,
  directives: [ElErwinSettingComponent]
})
class ElErwinSettingComponentTestController {
}

