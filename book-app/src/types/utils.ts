import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

export type inputType = [
  string,
  ChangeEventHandler<HTMLInputElement>,
  Dispatch<SetStateAction<string>>
];

export type defaultObject = {
  [key: string]: string;
};

export type likesHashMap = {
  [key: string]: boolean;
};
