import { newSpecPage } from '@stencil/core/testing';
import { AppAbout } from '../app-about';

describe('app-about', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppAbout],
      html: `<app-about></app-about>`,
    });
    expect(page.root).toEqualHtml(`
      <app-about>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-about>
    `);
  });
});
