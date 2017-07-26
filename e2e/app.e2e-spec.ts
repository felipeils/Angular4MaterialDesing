import { ConsumoApiRestPage } from './app.po';

describe('consumo-api-rest App', () => {
  let page: ConsumoApiRestPage;

  beforeEach(() => {
    page = new ConsumoApiRestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
