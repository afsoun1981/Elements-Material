export class ElementsProtoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('elements-proto-app h1')).getText();
  }
}
