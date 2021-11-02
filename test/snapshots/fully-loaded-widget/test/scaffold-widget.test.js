import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/scaffold-widget.js';

describe('ScaffoldWidget', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`<scaffold-widget></scaffold-widget>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<scaffold-widget></scaffold-widget>`);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<scaffold-widget></scaffold-widget>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
