import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";
import { ButtonHTMLAttributes, FC } from "react";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

export type ButtonProps = {
  children: any;
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type StyledButtonType = typeof BaseButton & {
  attrs: object;
};

const getButton = (
  buttonType: BUTTON_TYPE_CLASSES = BUTTON_TYPE_CLASSES.base
): StyledButtonType => {
  if (buttonType === BUTTON_TYPE_CLASSES.inverted) {
    return InvertedButton as StyledButtonType;
  } else if (buttonType === BUTTON_TYPE_CLASSES.google) {
    return GoogleSignInButton as StyledButtonType;
  } else {
    return BaseButton as StyledButtonType;
  }
};

const Button: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
