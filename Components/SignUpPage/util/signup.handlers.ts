import type {
  TemailErrors,
  Tgender,
  TgenderErrors,
  ThasReadTOSErrors,
  TpasswordErrors,
  TpasswordRepeatErrors,
  TsignUpStateValidators,
  TusernameErrors,
  TwantsEmailUpdatesErrors,
} from "../SignUpPage.types";

/**
 * checks the defined constraints for username field.
 * @param username the username string to be validated
 * @returns a string literal of type `TusernameErrors` indicating error of the argument; empty string means no error.
 */
const isUsernameValid = (username: string): TusernameErrors => {
  if (username.trim().length === 0) return "username can not be empty";
  if (username.length < 8)
    return "username should be larger than 8 charachters";
  if (username.length > 20)
    return "username should be smaller than 20 charachters";
  if (!username.match(/^[a-zA-Z]*$/))
    return "username should only include letters";
  return "";
};

/**
 * checks the defined constraints for email field.
 * @param email the email string to be validated
 * @returns a string literal of type `TemailErrors` indicating error of the argument; empty string means no error.
 */
const isEmailValid = (email: string): TemailErrors => {
  if (email.trim().length === 0) return "email can not be empty";
  const emailMatch = email.match(/^[\w\.-]+@[\w-]+\.[\w\.-]+$/);
  if (!emailMatch) return "email should have an standard formation";
  return "";
};

/**
 * checks the defined constraints for password field.
 * @param password the password string to be validated
 * @returns a string literal of type `TpasswordErrors` indicating error of the argument; empty string means no error.
 */
const isPasswordValid = (password: string): TpasswordErrors => {
  if (password.trim().length === 0) return "password can not be empty";
  if (password.length < 8)
    return "password should be larger than 8 charachters";
  if (password.length > 20)
    return "password should be smaller than 20 charachters";
  return "";
};

/**
 *
 * @param passwordR the password to be checked with the source password
 * @param password the source password string
 * @returns a string literal of type `TpasswordRepeatErrors` indicating unequality of arguments; empty string means no error.
 */
const isPasswordRepeatValid = (
  passwordR: string,
  password: string
): TpasswordRepeatErrors => {
  const identical: boolean = password === passwordR;
  return identical ? "" : "password repeat should match the provided password";
};

/**
 * checks the defined constraints for hasReadTOS field.
 * @param checked a boolean to be validated
 * @returns a string literal of type `ThasReadTOSErrors` indicating error of the argument; empty string means no error.
 */
const hasReadTOS = (checked: boolean): ThasReadTOSErrors => {
  return checked ? "" : "please review and agree to our terms of services";
};

/**
 * checks the defined constraints for EmailUpdates field.
 * @param checked a boolean to be validated
 * @returns always returns an empty string of type `TwantsEmailUpdatesErrors` since no validator is defined.
 */
const wantsEmailUpdates = (checked: boolean): TwantsEmailUpdatesErrors => "";

/**
 * checks the defined constraints for gender field.
 * @param gender a gender of type `Tgender` to be validated
 * @returns always returns an empty string of type `TgenderErrors` since no validator is defined.
 */
const isGenderVaid = (gender: Tgender): TgenderErrors => "";

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
