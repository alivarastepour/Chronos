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
  isUserNameValid: (username: string) => string;
  isEmailValid: (email: string) => string;
  isPasswordValid: (password: string) => string;
  isPasswordRepeatValid: (password: string) => string;
  isGenderVaild: (gender: Tgender) => string;
  hasReadTOS: (checked: boolean) => string;
  wantsEmailUpdates: (checked: boolean) => string;
};

export type TfirstStageForm = Pick<TsignUpState, "username" | "email">;
export type TsecondStageForm = Pick<TsignUpState, "password" | "passwordR">;
export type TthirdStageForm = Pick<
  TsignUpState,
  "gender" | "hasReadTOS" | "emailUpdates"
>;

export type TfirstStageFormValidators = Pick<
  TsignUpStateValidators,
  "isUserNameValid" | "isEmailValid"
>;
export type TsecondStageFormValidators = Pick<
  TsignUpStateValidators,
  "isPasswordValid" | "isPasswordRepeatValid"
>;
export type TthirdStageFormValidators = Pick<
  TsignUpStateValidators,
  "hasReadTOS" | "wantsEmailUpdates" | "isGenderVaild"
>;

export type TstageComponentSharedProps<T> = {
  handleSignUpStageChange: (state: T) => () => void;
  setSignUpState: React.Dispatch<React.SetStateAction<TsignUpState>>;
  shouldStageChange: (
    event: React.FormEvent,
    validationMap: Map<string, Function>
  ) => boolean;
};

export type TfirstStage = TfirstStageForm &
  TfirstStageFormValidators &
  TstageComponentSharedProps<"next">;

export type TsecondStage = TsecondStageForm &
  TsecondStageFormValidators &
  TstageComponentSharedProps<"next" | "prev">;

export type TthirdStage = TthirdStageForm &
  TthirdStageFormValidators &
  TstageComponentSharedProps<"prev">;
