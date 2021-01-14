import { Form, Formik } from "formik";
import { mockApi, mountWithTheme } from "~/utils/dist/Test";

import City from "./index";
import { Provider } from "react-redux";
import React from "react";
import { act } from "react-dom/test-utils";
import store from "~/state/dist/store";
import wait from "waait";

import chai from "chai/chai.js";
const expect = chai.expect;

describe("<City />", () => {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 1);
  const mock = mockApi();
  mock.onPost("api/v1/algolia_places").reply(200, {
    key: "foobar",
    expiresAt,
  });

  it("renders without crashing", async () => {
    const wrapper = mountWithTheme(
      <Provider store={store}>
        <Formik
          initialValues={{
            test: "",
          }}
          onSubmit={() => {}}
          children={() => (
            <Form>
              <City name="test" required />
            </Form>
          )}
        />
      </Provider>
    );
    // Wait for response
    await act(() => wait(0));
    wrapper.update();
    expect(wrapper.exists(City)).to.equal(true);
    expect(wrapper.exists(".invalid-feedback")).to.equal(false);
  });
});
