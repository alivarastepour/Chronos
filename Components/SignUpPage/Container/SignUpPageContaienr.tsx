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

const SignUpPageContainer: React.FC = () => {
  const [signUpStage, setSignUpStage] = useState(1);

  const prevStage: React.MouseEventHandler<HTMLButtonElement> = () => {
    setSignUpStage((prev) => --prev);
  };

  const nextStage: React.MouseEventHandler<HTMLButtonElement> = () => {
    setSignUpStage((prev) => ++prev);
  };

  const handleSignUpStageChange = (state: "next" | "prev") => {
    return state === "next" ? nextStage : prevStage;
  };

  const getCurrentStageForm = (): React.ReactElement => {
    const Component =
      signUpStage === 1
        ? FirstStage
        : signUpStage === 2
        ? SecondStage
        : signUpStage === 3
        ? ThirdStage
        : undefined;

    if (Component)
      return <Component handleSignUpStageChange={handleSignUpStageChange} />;
    return <div>error bitch</div>;
  };

  const getStageHolderClassName = (state: number) => {
    return state === signUpStage
      ? "signup-stage-holder-item-active"
      : "signup-stage-holder-item-deactive";
  };

  const currentFormComponent = getCurrentStageForm();

  return (
    <SignUpPagePresenter
      FormComponent={currentFormComponent}
      getStageHolderClassName={getStageHolderClassName}
    />
  );
};

export default SignUpPageContainer;
