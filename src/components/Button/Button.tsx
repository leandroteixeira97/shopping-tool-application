import { Button as MUIButton } from "@mui/material";

export function Button(buttonProps: ButtonProps) {
  return (
    <MUIButton
      id={buttonProps.id}
      color={buttonProps.color}
      variant={buttonProps.variant}
      disabled={buttonProps.disabled}
    >
      {buttonProps.text}
    </MUIButton>
  );
}

interface ButtonProps {
  id: string;
  variant: "text" | "contained" | "outlined";
  text: string;
  disabled?: boolean;
  color?: "success" | "error" | "primary" | "secondary";
}
