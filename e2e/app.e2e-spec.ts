import { BotChatAppPage } from './app.po';

describe('bot-chat-app App', function() {
  let page: BotChatAppPage;

  beforeEach(() => {
    page = new BotChatAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
