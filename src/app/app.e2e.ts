import { browser, by, element } from 'protractor';

describe('App Component', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result = 'Angular 2 + Webpack 2';
    expect(subject).toEqual(result);
  });

  it('should have header', () => {
    let subject = element(by.css('h1')).isPresent();
    let result = true;
    expect(subject).toEqual(result);
  });

});
