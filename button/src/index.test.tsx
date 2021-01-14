import React from "react";
import { mountWithTheme } from "~/utils/dist/Test";
import Button from "./index";

describe("<Button />", () => {
  it("renders without crashing", () => {
    mountWithTheme(<Button />);
  });
});
