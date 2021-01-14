---
{
  "title": "Z-Indices Tokens"
}
---

```js script
import { html } from "lit-element";
import tokens from "./dist/tokens-definitions.js";
import { ZIndexSwatch } from "@divriots/base-swatch";
customElements.define("z-index-swatch", ZIndexSwatch);
```

```js story
export const story = () =>
  html`<z-index-swatch .tokens=${tokens}></z-index-swatch>`;
```
