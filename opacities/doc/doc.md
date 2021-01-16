---
{
  "title": "Opacity Tokens"
}
---

```js script
import { html } from "lit-element";
import tokens from "../dist/tokens-definitions.js";
import { OpacitySwatch } from "@divriots/base-swatch";
customElements.define("opacity-swatch", OpacitySwatch);
```

```html story
<opacity-swatch .tokens="${tokens}"></opacity-swatch>
```
