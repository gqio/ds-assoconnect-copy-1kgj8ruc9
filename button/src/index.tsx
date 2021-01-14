import React, { FC } from "react@16.13.1";
import ReactDOM from "react-dom@16.13.1";
import * as Style from "./style";
import * as Type from "./type";

const Button: FC<Type.IButton> = ({
  color,
  dataIdSuffix,
  type = "button",
  ...rest
}) => (
  <Style.Button
    type={type}
    color={color}
    data-id={`component_Button_${type}${color ? `_${color}` : ""}${
      dataIdSuffix ? `_${dataIdSuffix}` : ""
    }`}
    {...rest}
  />
);

export default Button;
