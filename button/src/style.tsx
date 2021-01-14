import React from "react";
import styled from "styled-components";
import { Button as ReactStrapButton } from "reactstrap";

export const Button = styled(({ ...props }) => <ReactStrapButton {...props} />)`
  text-transform: uppercase;
  &:hover {
    box-shadow: none;
  }
`;
