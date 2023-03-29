import { newSpecPage } from '@stencil/core/testing';
import { AboutSubFilter } from '../about-sub-filter';

describe('about-sub-filter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AboutSubFilter],
      html: `<about-sub-filter></about-sub-filter>`,
    });
    expect(page.root).toEqualHtml(`
      <about-sub-filter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </about-sub-filter>
    `);
  });
});
