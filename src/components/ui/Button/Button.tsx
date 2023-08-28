import { ButtonHTMLAttributes } from "react";

// Styles
import { cva, type RecipeVariantProps } from "@/styled-system/css";

/** Inspired from Class Variance Authority */
const buttonClassName = cva({
  base: {
    width: "100%",
    padding: "0.5rem",
    rounded: "0.25rem",
    textAlign: "center",
    cursor: "pointer",
  },

  variants: {
    variant: {
      primary: { bg: "primary", color: "black", _hover: { bg: "yellow.400" } },

      outline: {
        bg: "transparent",
        color: "white",
        border: "1px solid",
        borderColor: "neutral.600",
        _hover: { bg: "neutral.800" },
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

type ButtonVariants = RecipeVariantProps<typeof buttonClassName>;

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;

export const Button = ({ children, variant, ...props }: Props) => (
  <button {...props} className={buttonClassName({ variant })}>
    {children}
  </button>
);
