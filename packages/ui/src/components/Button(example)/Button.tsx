import React, { forwardRef } from "react";
import { cn } from "@repo/utils";
import { cva, VariantProps } from "class-variance-authority";

const ButtonVariants = cva(
  `
    inline-flex
    items-center
    justify-center
    whitespace-nowrap
    rounded-md
    p-2
    text-sm
    font-medium
    transition-colors
  `,
  {
    variants: {
      variant: {
        default: `
          bg-[#1E1E1E]
          text-white
          hover:bg-[#2B2B2B]
        `,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonVariantsProps = VariantProps<typeof ButtonVariants>;

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps & ButtonVariantsProps
>(function Button({ children, className, variant, ...props }, ref) {
  return (
    <button
      className={cn(ButtonVariants({ variant }), className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
