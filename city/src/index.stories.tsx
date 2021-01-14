import React from "react";
import City from "./index";
import { Form, Formik } from "formik";

import { withThemeProvider } from "~/utils/dist/Story";
import { Provider } from "react-redux";
import store from "~/state/dist/store";

export default {
  parameters: {
    layout: "centered",
  },
  decorators: [withThemeProvider()],
};

export const CityStory = () => (
  <Provider store={store}>
    <Formik
      initialValues={{
        test: "",
      }}
      onSubmit={() => {}}
      children={() => (
        <Form>
          <City label="toto" name="test" required />
        </Form>
      )}
    />
  </Provider>
);
