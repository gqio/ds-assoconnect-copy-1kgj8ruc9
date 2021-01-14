// import { IInput } from "~/input/src/type";
// To be exported in its own component
// typings intra components does not work yet
export interface IInput {
  name?: string;
  className?: string;
  helpText?: string;
  onChange?: any;
  placeholder?: string;
  required?: boolean;
}

export interface ICity extends IInput {
  label?: string;
}
