import { RedeSocialPage } from './app.po';

describe('rede-social App', () => {
  let page: RedeSocialPage;

  beforeEach(() => {
    page = new RedeSocialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
