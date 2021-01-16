import React from "react";
import { mountWithTheme } from "~/utils/src/Test";
import Button from "./index";

describe("<Button />", () => {
  it("renders without crashing", () => {
    mountWithTheme(<Button />);
  });
});
