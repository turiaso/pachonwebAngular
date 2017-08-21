import { TestMaterialPage } from './app.po';

describe('test-material App', () => {
  let page: TestMaterialPage;

  beforeEach(() => {
    page = new TestMaterialPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
