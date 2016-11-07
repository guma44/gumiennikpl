import { BrowarGumiennikAppPage } from './app.po';

describe('browar-gumiennik-app App', function() {
  let page: BrowarGumiennikAppPage;

  beforeEach(() => {
    page = new BrowarGumiennikAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
