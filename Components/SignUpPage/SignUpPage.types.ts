export type Tgender = "male" | "female" | "non-binary" | "unknown";

export type TsignUpState = {
  username: string;
  email: string;
  password: string;
  passwordR: string;
  gender: Tgender;
  hasReadTOS: boolean;
  emailUpdates: boolean;
};

export type TsignUpStateValidators = {
  username: (username: string) => string;
  email: (email: string) => string;
  password: (password: string) => string;
  passwordR: (password: string, passwordR: string) => string;
  gender: (gender: Tgender) => string;
  tos: (checked: boolean) => string;
  updates: (checked: boolean) => string;
};

export type TfirstStageForm = Pick<TsignUpState, "username" | "email">;
export type TsecondStageForm = Pick<TsignUpState, "password" | "passwordR">;
export type TthirdStageForm = Pick<
  TsignUpState,
  "gender" | "hasReadTOS" | "emailUpdates"
>;

export type TfirstStageFormValidators = Pick<
  TsignUpStateValidators,
  "username" | "email"
>;
export type TsecondStageFormValidators = Pick<
  TsignUpStateValidators,
  "password" | "passwordR"
>;
export type TthirdStageFormValidators = Pick<
  TsignUpStateValidators,
  "tos" | "updates" | "gender"
>;

export type TshouldStageChangeRT = {
  shouldStageChange: boolean;
  errors: Map<string, string>;
};

export type TstageComponentSharedProps<T> = {
  handleSignUpStageChange: (state: T) => () => void;
  shouldStageChange: (event: React.FormEvent) => TshouldStageChangeRT;
  handleErrors: (errors: Map<string, string>) => void;
  setSignUpState: React.Dispatch<React.SetStateAction<TsignUpState>>;
};

export type TfirstStage = TfirstStageForm &
  TfirstStageFormValidators &
  TstageComponentSharedProps<"next">;

export type TsecondStage = TsecondStageForm &
  TsecondStageFormValidators &
  TstageComponentSharedProps<"next" | "prev">;

export type TthirdStage = TthirdStageForm &
  TthirdStageFormValidators &
  TstageComponentSharedProps<"prev" | "submit">;

export type TusernameErrors =
  | "username can not be empty"
  | "username should be larger than 8 charachters"
  | "username should be smaller than 20 charachters"
  | "username should only include letters"
  | "";

export type TemailErrors =
  | "email can not be empty"
  | "email should have an standard formation"
  | "";

export type TpasswordErrors =
  | "password can not be empty"
  | "password should be larger than 8 charachters"
  | "password should be smaller than 20 charachters"
  | "";

export type TpasswordRepeatErrors =
  | "password repeat should match the provided password"
  | "";

export type ThasReadTOSErrors =
  | "please review and agree to our terms of services"
  | "";

export type TwantsEmailUpdatesErrors = "";
export type TgenderErrors = "";
