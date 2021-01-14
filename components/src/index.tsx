import React from "react";
import { FormText, Label as ReactStrapLabel } from "reactstrap";
export { FormGroup } from "reactstrap";

export const FormHelper = ({ children }) => {
  return <FormText>{children}</FormText>;
};

export const Label = ({ children }) => {
  return (
    <ReactStrapLabel style={{ marginRight: "0.5rem" }}>
      {children}
    </ReactStrapLabel>
  );
};

export const AlgoliaPlacesWidget = ({ placeholder, onChange, required }) => {
  return (
    <span>
      <datalist id="cities">
        <option value="Paris" />
        <option value="Lyon" />
        <option value="Marseille" />
        <option value="Bordeaux" />
        <option value="Lille" />
      </datalist>
      <input
        placeholder={placeholder}
        required={required}
        list="cities"
        id="inputcity"
        onChange={onChange}
      />
    </span>
  );
};
