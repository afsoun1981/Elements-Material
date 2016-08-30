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
import { ElErwinArticleComponent } from './el-erwin-article.component';

describe('Component: ElErwinArticle', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ElErwinArticleComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ElErwinArticleComponent],
      (component: ElErwinArticleComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ElErwinArticleComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ElErwinArticleComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-el-erwin-article></app-el-erwin-article>
  `,
  directives: [ElErwinArticleComponent]
})
class ElErwinArticleComponentTestController {
}

