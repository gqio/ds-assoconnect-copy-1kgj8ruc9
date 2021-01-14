import { ReactElement } from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { mount } from "./enzyme";
import { ThemeProvider as wrappingComponent } from "~/theme";

const mountWithTheme = (tree: ReactElement) =>
  mount(tree, { wrappingComponent });

const mockApi = () => new MockAdapter(axios);

export { mountWithTheme, mockApi };
