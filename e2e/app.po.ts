import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo(route) {
    return browser.get(route);
  }

  getBrowserTitle() {
    return browser.getTitle();
  }

  getElementByCSS(cssSelector: string) {
    return element(by.css(cssSelector));
  }

  getElementById(id: string) {
    return element(by.id(id));
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
