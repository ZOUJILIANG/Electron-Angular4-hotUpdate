import { CMDemoPage } from './app.po';

describe('c-m-demo App', () => {
  let page: CMDemoPage;

  beforeEach(() => {
    page = new CMDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
