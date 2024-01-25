import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import Styles from "./LoginForm.module.scss";

export function LoginForm(loginFormProps: LoginFormProps) {
  return (
    <div className={Styles.loginFormContainer}>
      <Input
        type={"text"}
        placeholder={"Digite seu usuário"}
        id={"username-input"}
        disabled={false}
        required={true}
        variant={"outlined"}
        label={"Usuário"}
      />
      <Input
        type={"password"}
        placeholder={"Digite sua senha"}
        id={"password-input"}
        disabled={false}
        required={true}
        variant={"outlined"}
        label={"Senha"}
      />
      <Button
        id={"login-btn"}
        variant={"contained"}
        text={"Login"}
        color={"success"}
      />
      <Button
        id={"forget-password-btn"}
        variant={"outlined"}
        text={"Esqueci minha senha"}
      />
    </div>
  );
}

interface LoginFormProps {}
