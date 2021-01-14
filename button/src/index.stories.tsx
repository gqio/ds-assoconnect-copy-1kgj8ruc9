import React from "react";
import Button from "./index";

import { withThemeProvider } from "~/utils/dist/Story";

export default {
  parameters: {
    layout: "centered",
  },
  decorators: [withThemeProvider()],
};

export const Primary = () => (
  <div>
    <Button color="primary">Primary</Button>
    <Button color="primary" disabled>
      Disabled
    </Button>
  </div>
);

export const Secondary = () => (
  <div>
    <Button>Secondary</Button>
    <Button disabled>Disabled</Button>
  </div>
);
