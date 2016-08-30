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
import { ElErwinChannelArticleComponent } from './el-erwin-channel-article.component';

describe('Component: ElErwinChannelArticle', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ElErwinChannelArticleComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ElErwinChannelArticleComponent],
      (component: ElErwinChannelArticleComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ElErwinChannelArticleComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ElErwinChannelArticleComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-el-erwin-channel-article></app-el-erwin-channel-article>
  `,
  directives: [ElErwinChannelArticleComponent]
})
class ElErwinChannelArticleComponentTestController {
}

