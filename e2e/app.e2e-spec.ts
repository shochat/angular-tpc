import { AngularTpcPage } from './app.po';

describe('angular-tpc App', () => {
  let page: AngularTpcPage;

  beforeEach(() => {
    page = new AngularTpcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
