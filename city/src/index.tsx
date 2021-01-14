import * as Type from "./type";
import * as yup from "yup";
import { uniqueId } from "lodash-es";
import React, { FC, useRef } from "react@16.13.1";
import ReactDOM from "react-dom@16.13.1";
import {
  AlgoliaPlacesWidget,
  FormGroup,
  FormHelper,
  Label,
} from "~/components";
import { ChangeEvent } from "places.js";
import { createIntl } from "~/hooks";
import { Field, FieldProps } from "formik";

export const cityFilter = (city: string): string => {
  const citiesWithDistrict = ["Paris", "Lyon", "Marseille"];
  const citySplitted = city.split(" ")[0];
  return citiesWithDistrict.includes(citySplitted) ? citySplitted : city;
};

const City: FC<Type.ICity> = ({
  className,
  helpText,
  label,
  name,
  onChange,
  placeholder,
  required,
  ...rest
}) => {
  const refUniqueId = useRef(uniqueId("city-"));
  const intl = createIntl("components_city");
  /**
   * Field validation
   *
   * @param value - Value of the field
   * @returns The error of the field
   */
  const validate = (value: string): undefined | string => {
    const schema = yup.string();
    // Required
    if (required) {
      const checkRequired = schema.required().isValidSync(value);
      if (!checkRequired) {
        return intl.formatMessage({ id: "validate.required" });
      }
    }
  };

  return (
    <Field
      name={name}
      validate={validate}
      children={({
        field,
        form: { handleChange, setFieldTouched, setFieldValue },
      }: FieldProps) => (
        <FormGroup className={className} data-id="component_FormCity">
          {label !== "" && (
            <Label for={refUniqueId.current}>
              {label === undefined
                ? intl.formatMessage({ id: "label" })
                : label}
            </Label>
          )}
          <AlgoliaPlacesWidget
            {...field}
            id={refUniqueId.current}
            placeholder={
              placeholder === undefined
                ? intl.formatMessage({ id: "placeholder" })
                : placeholder
            }
            required={required}
            restrictType="city"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(event);
              onChange && onChange(event);
            }}
            onAutocompleteChange={(changeEvent: ChangeEvent) => {
              setFieldTouched(field.name, true);
              setFieldValue(
                field.name,
                cityFilter(changeEvent.suggestion.name)
              );
            }}
            onAutocompleteClear={() => {
              setFieldTouched(field.name, true);
              setFieldValue(field.name, "");
            }}
            templates={{
              value: (suggestion) => cityFilter(suggestion.name),
              suggestion: (suggestion) => suggestion.name,
            }}
            {...rest}
          />
          <FormHelper fieldName={field.name} helpText={helpText} />
        </FormGroup>
      )}
    />
  );
};

export default City;
