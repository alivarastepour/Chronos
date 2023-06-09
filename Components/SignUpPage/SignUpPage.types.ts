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
  errors: Map<string, string> | undefined;
};

export type TstageComponentSharedProps<T> = {
  handleSignUpStageChange: (state: T) => () => void;
  setSignUpState: React.Dispatch<React.SetStateAction<TsignUpState>>;
  shouldStageChange: (event: React.FormEvent) => TshouldStageChangeRT;
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
