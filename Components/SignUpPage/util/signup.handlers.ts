import { Tgender, TsignUpStateValidators } from "../SignUpPage.types";

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
  return emailMatch ? "" : "email should have an standard formation";
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

const isPasswordRepeatValid = (passwordR: string, password: string): string => {
  console.log(passwordR, password);

  return password === passwordR
    ? ""
    : "password repeat does not match the provided password";
};

const hasReadTOS = (checked: boolean): string => {
  return checked ? "" : "please review and agree to our terms of services.";
};

const wantsEmailUpdates = (checked: boolean): "" => "";
const isGenderVaid = (gender: Tgender): "" => "";

const VALIDATION_MAP: TsignUpStateValidators = {
  username: isUsernameValid,
  email: isEmailValid,
  password: isPasswordValid,
  passwordR: isPasswordRepeatValid,
  gender: isGenderVaid,
  tos: hasReadTOS,
  updates: wantsEmailUpdates,
};

type Tfields = keyof TsignUpStateValidators;
export const getFieldValidators = (fields: string[]): Map<string, Function> => {
  const partialValidatorsMap = new Map<string, Function>();
  for (const field of fields) {
    const splitField = field.split("-")[field.split("-").length - 1] as Tfields;
    const handler = VALIDATION_MAP[splitField];
    partialValidatorsMap.set(field, handler);
  }
  return partialValidatorsMap;
};

export const getFormFields = (form: HTMLFormElement): string[] => {
  const inputs = form.querySelectorAll("input");
  const fields: string[] = [];
  inputs.forEach((input) => input.name !== "" && fields.push(input.name));
  return fields;
};

const get = (id: string) => document.getElementById(id);

export const handleSignUpErrors = (errorMap: Map<string, string>) => {
  console.log(errorMap);

  for (const [field, value] of errorMap) {
    const errorElementID: string = `${field}-error`;
    const errorElement = get(errorElementID) as HTMLElement;
    const shouldClearError: boolean = value === "";
    errorElement.innerHTML = value;
    if (shouldClearError) {
      errorElement.classList.add(errorElementID);
    } else {
      errorElement.classList.remove(errorElementID);
    }
  }
};
