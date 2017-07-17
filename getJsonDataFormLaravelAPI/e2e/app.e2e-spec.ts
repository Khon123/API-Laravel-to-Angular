import { GetJsonDataFormLaravelAPIPage } from './app.po';

describe('get-json-data-form-laravel-api App', function() {
  let page: GetJsonDataFormLaravelAPIPage;

  beforeEach(() => {
    page = new GetJsonDataFormLaravelAPIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
