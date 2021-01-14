---
{
  "title": "Radii Tokens"
}
---

```js script
import { html } from "lit-element";
import radii from "./dist/tokens-definitions.js";
import { RadiiSwatch } from "@divriots/base-swatch";
customElements.define("radii-swatch", RadiiSwatch);
```

```html story
<radii-swatch .tokens="${radii}"></radii-swatch>
```
