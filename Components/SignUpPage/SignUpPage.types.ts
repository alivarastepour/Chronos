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

export type TfirstStageForm = Pick<TsignUpState, "username" | "email">;
export type TsecondStageForm = Pick<TsignUpState, "password" | "passwordR">;
export type TthirdStageForm = Pick<
  TsignUpState,
  "gender" | "hasReadTOS" | "emailUpdates"
>;
