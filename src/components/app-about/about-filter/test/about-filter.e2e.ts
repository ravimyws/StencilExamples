import { newE2EPage } from '@stencil/core/testing';

describe('about-filter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<about-filter></about-filter>');

    const element = await page.find('about-filter');
    expect(element).toHaveClass('hydrated');
  });
});
