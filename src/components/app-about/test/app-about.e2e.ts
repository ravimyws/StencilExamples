import { newE2EPage } from '@stencil/core/testing';

describe('app-about', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-about></app-about>');

    const element = await page.find('app-about');
    expect(element).toHaveClass('hydrated');
  });
});
