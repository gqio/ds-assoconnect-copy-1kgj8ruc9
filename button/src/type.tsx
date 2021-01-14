import { ComponentProps } from "react";
import { Button as ReactStrapButton } from "reactstrap";

export interface IButton extends ComponentProps<typeof ReactStrapButton> {
  dataIdSuffix?: string;
  close?: boolean;
}
