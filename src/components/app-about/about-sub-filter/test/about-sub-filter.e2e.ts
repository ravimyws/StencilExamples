import { newE2EPage } from '@stencil/core/testing';

describe('about-sub-filter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<about-sub-filter></about-sub-filter>');

    const element = await page.find('about-sub-filter');
    expect(element).toHaveClass('hydrated');
  });
});
