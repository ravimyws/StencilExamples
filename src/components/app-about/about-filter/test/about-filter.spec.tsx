import { newSpecPage } from '@stencil/core/testing';
import { AboutFilter } from '../about-filter';

describe('about-filter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AboutFilter],
      html: `<about-filter></about-filter>`,
    });
    expect(page.root).toEqualHtml(`
      <about-filter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </about-filter>
    `);
  });
});
