import { InputHTMLAttributes } from "react";

// Styles
import { css } from "@/styled-system/css";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: Props) => (
  <input
    className={css({
      border: "1px solid black",
      rounded: "4px",
      width: "100%",
      height: "2.5rem",
      paddingX: "1rem",

      _focusWithin: {
        outline: "2px solid",
        outlineColor: "blue.200",
      },
    })}
    {...props}
  />
);
