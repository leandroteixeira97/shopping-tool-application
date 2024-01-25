import { TextField } from "@mui/material";

export function Input(props: InputProps) {
  return (
    <TextField
      id={props.id}
      placeholder={props.placeholder}
      required={props.required}
      type={props.type}
      variant={props.variant}
      label={props.label}
    />
  );
}

interface InputProps {
  placeholder: string;
  id: string;
  disabled: boolean;
  required: boolean;
  type: "text" | "password";
  variant: "outlined" | "filled" | "standard";
  label: string;
}
