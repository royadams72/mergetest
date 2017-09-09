import { MergetestPage } from './app.po';

describe('mergetest App', () => {
  let page: MergetestPage;

  beforeEach(() => {
    page = new MergetestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
