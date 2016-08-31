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
import { ElErwinChannelArticleinfoComponent } from './el-erwin-channel-articleinfo.component';

describe('Component: ElErwinChannelArticleinfo', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ElErwinChannelArticleinfoComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ElErwinChannelArticleinfoComponent],
      (component: ElErwinChannelArticleinfoComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ElErwinChannelArticleinfoComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ElErwinChannelArticleinfoComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-el-erwin-channel-articleinfo></app-el-erwin-channel-articleinfo>
  `,
  directives: [ElErwinChannelArticleinfoComponent]
})
class ElErwinChannelArticleinfoComponentTestController {
}

