---
{
  "title": "Colors Tokens"
}
---

```js script
import { html } from "lit-html";
import colors from "../dist/tokens-definitions.js";
import { PaletteSwatch, ColorSwatch } from "@divriots/base-swatch";
customElements.define("color-swatch", ColorSwatch);
customElements.define("color-palette", PaletteSwatch);
```

```html story
<color-swatch .tokens=${colors.filter((c) => c.attributes.type !== "base")}>
</color-swatch>
```

---

```js story
const baseColors = colors
  .filter((c) => c.attributes.type === "base")
  .reduce((a, v) => {
    const dashPos = v.attributes.item.indexOf("-");
    const shade =
      dashPos > 0 ? v.attributes.item.substring(0, dashPos) : v.attributes.item;
    if (!a[shade]) a[shade] = [];
    a[shade].push(v);
    return a;
  }, {});
export const baseColorStory = () => {
  return html`<details open><summary>Palette</summary>${Object.values(
    baseColors
  ).map((c) => html`<color-palette .colors=${c}></color-palette>`)}</details`;
};
```
