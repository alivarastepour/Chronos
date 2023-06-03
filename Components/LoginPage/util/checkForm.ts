import { TloginState } from "../TloginState";

type TusernameStatus =
  | "username should be larger than 8 charachters"
  | "username should be smaller than 20 charachters"
  | "username should only include letters"
  | "";

type TpasswordStatus =
  | "password should be larger than 8 charachters"
  | "password should be smaller than 20 charachters"
  | "";

const get = (id: string) => document.getElementById(id);

const isUsernameValid = (username: string): TusernameStatus => {
  if (username.length < 8)
    return "username should be larger than 8 charachters";
  if (username.length > 20)
    return "username should be smaller than 20 charachters";
  if (!username.match(/^[a-zA-Z]*$/))
    return "username should only include letters";
  return "";
};

const isPasswordValid = (password: string): TpasswordStatus => {
  if (password.length < 8)
    return "password should be larger than 8 charachters";
  if (password.length > 20)
    return "password should be smaller than 20 charachters";
  return "";
};

const showPasswordError = (passwordStatus: TpasswordStatus): void => {
  const errorContainer = get("login-password-error") as Element;
  if (passwordStatus === "") {
    errorContainer.innerHTML = "";
    errorContainer.classList.add("login-password-error");
  } else {
    errorContainer.innerHTML = passwordStatus;
    errorContainer.classList.remove("login-password-error");
  }
};

const showUsernameError = (usernameStatus: TusernameStatus): void => {
  const errorContainer = get("login-username-error") as Element;
  if (usernameStatus === "") {
    errorContainer.innerHTML = "";
    errorContainer.classList.add("login-username-error");
  } else {
    errorContainer.innerHTML = usernameStatus;
    errorContainer.classList.remove("login-username-error");
  }
};

const handlePasswordError = (value: string): void => {
  showPasswordError(isPasswordValid(value));
};

const handleUsernameError = (value: string): void => {
  showUsernameError(isUsernameValid(value));
};

const handleFieldError = (
  value: string,
  handler: (value: string) => void
): void => {
  handler(value);
};

export const submitCheck = (
  e: React.SyntheticEvent,
  loginState: TloginState
): void => {
  const { username, password, saveLoginInfo } = loginState;

  handleFieldError(username, handleUsernameError);
  handleFieldError(password, handlePasswordError);

  e.preventDefault();
};

export const blurCheck = (
  target: "password" | "username"
): ((value: string) => void) => {
  return target === "password"
    ? (value: string) => handleFieldError(value, handlePasswordError)
    : (value: string) => handleFieldError(value, handleUsernameError);
};
