import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const Button = ({ variant, size, children }) => {
  const ButtonVariant =
    variant === "outline"
      ? OutlineButton
      : variant === "ghost"
      ? GhostButton
      : PrimaryButton;

  const styles =
    size === "small"
      ? {
          "--border-radius": "2px",
          "--font-size": "16px",
          "--padding": "8px 16px"
        }
      : size === "medium"
      ? {
          "--border-radius": "2px",
          "--font-size": "18px",
          "--padding": "16px 24px"
        }
      : {
          "--border-radius": "4px",
          "--font-size": "21px",
          "--padding": "20px 36px"
        };

  return <ButtonVariant style={{ ...styles }}>{children}</ButtonVariant>;
};

const PrimaryButton = styled.button`
  --bgcolor: ${COLORS.primary};
  --bgcolor-hover: ${COLORS.primaryLight};
  --text-color: ${COLORS.white};
  --border-color: ${COLORS.primary};
  --focus-outline-color: ${COLORS.primary};

  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: var(--padding);
  font-family: "Roboto", sans-serif;
  font-size: var(--font-size);
  font-weight: 500;
  text-transform: uppercase;
  background-color: var(--bgcolor);
  color: var(--text-color);

  &:focus {
    outline: 2px solid var(--focus-outline-color);
    outline-offset: 5px;
    -moz-outline-radius: 8px;
  }

  &:hover {
    background-color: var(--bgcolor-hover);
  }
`;

const OutlineButton = styled(PrimaryButton)`
  --bgcolor: ${COLORS.white};
  --bgcolor-hover: ${COLORS.offwhite};
  --text-color: ${COLORS.primary};
  --border-color: ${COLORS.primary};
  --focus-outline-color: ${COLORS.primary};
`;

const GhostButton = styled(PrimaryButton)`
  --bgcolor: transparent;
  --bgcolor-hover: ${COLORS.transparentGray15};
  --text-color: ${COLORS.transparentGray75};
  --border-color: transparent;
  --focus-outline-color: ${COLORS.transparentGray75};

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Button;
