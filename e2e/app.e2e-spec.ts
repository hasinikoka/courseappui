import { Courseapp1Page } from './app.po';

describe('courseapp1 App', function() {
  let page: Courseapp1Page;

  beforeEach(() => {
    page = new Courseapp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
