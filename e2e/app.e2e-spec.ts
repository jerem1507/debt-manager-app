import {DebtManagerAppPage} from './app.po';

describe('Debt Manager App', function() {
  let page: DebtManagerAppPage;

  beforeEach(() => {
    page = new DebtManagerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
