import { Tgender } from "../SignUpPage.types";

const isUsernameValid = (username: string): string => {
  if (username.trim().length === 0) {
    return "username can not be empty";
  }
  if (username.length < 8)
    return "username should be larger than 8 charachters";
  if (username.length > 20)
    return "username should be smaller than 20 charachters";
  if (!username.match(/^[a-zA-Z]*$/))
    return "username should only include letters";
  return "";
};

const isEmailValid = (email: string): string => {
  const emailMatch = email.match(/^[\w\.-]+@[\w-]+\.[\w\.-]+$/);
  return emailMatch
    ? ""
    : "email should match the pattern jon.doe@domain.topleveldomain";
};

const isPasswordValid = (password: string): string => {
  if (password.trim().length === 0) {
    return "password can not be empty";
  }
  if (password.length < 8)
    return "password should be larger than 8 charachters";
  if (password.length > 20)
    return "password should be smaller than 20 charachters";
  return "";
};

const isPasswordRepeatValid = (password: string, passwordR: string): string => {
  return password === passwordR
    ? ""
    : "password repeat does not match the provided password";
};

const hasReadTOS = (checked: boolean): string => {
  return checked
    ? ""
    : "please review and agree to our terms of services before creating your account.";
};

const wantsEmailUpdates = (checked: boolean): "" => "";
const isGenderVaid = (gender: Tgender): "" => "";
