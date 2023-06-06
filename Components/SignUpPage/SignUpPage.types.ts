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

export type TstageComponentSharedProps<T> = {
  handleSignUpStageChange: (state: T) => () => void;
  setSignUpState: React.Dispatch<React.SetStateAction<TsignUpState>>;
  shouldStageChange: (
    event: React.FormEvent,
    validationMap: Map<string, Function>
  ) => boolean;
};

export type TfirstStage = TfirstStageForm & TstageComponentSharedProps<"next">;
export type TsecondStage = TsecondStageForm &
  TstageComponentSharedProps<"next" | "prev">;
export type TthirdStage = TthirdStageForm & TstageComponentSharedProps<"prev">;
