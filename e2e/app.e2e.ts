import { ElementsProtoPage } from './app.po';

describe('elements-proto App', function() {
  let page: ElementsProtoPage;

  beforeEach(() => {
    page = new ElementsProtoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('elements-proto works!');
  });
});
