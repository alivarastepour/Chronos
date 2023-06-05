import { useState } from "react";
import dynamic from "next/dynamic";

import SignUpPagePresenter from "../Presenter/SignUpPagePresenter";

const FirstStage = dynamic(() => import("../FirstStage"), {
  loading: () => <div>hi</div>,
});
const SecondStage = dynamic(() => import("../SecondStage"), {
  loading: () => <div>hi</div>,
});
const ThirdStage = dynamic(() => import("../ThirdStage"), {
  loading: () => <div>hi</div>,
});

export type Tgender = "male" | "female" | "non-binary" | "unknown";

type TsignUpState = {
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

const SignUpPageContainer: React.FC = () => {
  const [signUpStage, setSignUpStage] = useState(1);

  const [signUpState, setSignUpState] = useState<TsignUpState>({
    username: "",
    email: "",
    password: "",
    passwordR: "",
    gender: "unknown",
    hasReadTOS: false,
    emailUpdates: true,
  });

  const prevStage = (): void => {
    setSignUpStage((prev) => --prev);
  };

  const nextStage = (): void => {
    setSignUpStage((prev) => ++prev);
  };

  const handleSignUpStageChange = (state: "next" | "prev"): (() => void) => {
    return state === "next" ? nextStage : prevStage;
  };

  const getCurrentStageComponent = () => {
    const Component =
      signUpStage === 1
        ? FirstStage
        : signUpStage === 2
        ? SecondStage
        : ThirdStage;

    return Component;
    // if (Component) return Component as React.FC;
    // return (<></>) as React.FC;
  };

  const getCurrentStageProps = () => {
    const props =
      signUpStage === 1
        ? ({
            username: signUpState.username,
            email: signUpState.email,
          } as TfirstStageForm)
        : signUpStage === 2
        ? ({
            password: signUpState.password,
            passwordR: signUpState.passwordR,
          } as TsecondStageForm)
        : ({
            gender: signUpState.gender,
            hasReadTOS: signUpState.hasReadTOS,
            emailUpdates: signUpState.emailUpdates,
          } as TthirdStageForm);
    return props;
  };

  const getStageHolderClassName = (state: number) => {
    return state === signUpStage
      ? "signup-stage-holder-item-active"
      : "signup-stage-holder-item-deactive";
  };

  const CurrentFormComponent = getCurrentStageComponent();
  const currentFormComponentProps = getCurrentStageProps();
  const FormComponent = (
    <CurrentFormComponent
      handleSignUpStageChange={handleSignUpStageChange}
      {...currentFormComponentProps}
    />
  );

  return (
    <SignUpPagePresenter
      FormComponent={FormComponent}
      getStageHolderClassName={getStageHolderClassName}
    />
  );
};

export default SignUpPageContainer;
