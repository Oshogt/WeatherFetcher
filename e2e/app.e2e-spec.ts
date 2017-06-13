import { WeatherFethcerPage } from './app.po';

describe('weather-fethcer App', () => {
  let page: WeatherFethcerPage;

  beforeEach(() => {
    page = new WeatherFethcerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
