import { useState } from "react";
import SignUpPagePresenter from "../Presenter/SignUpPagePresenter";
import dynamic from "next/dynamic";

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

  const getCurrentStageForm = () => {
    if (signUpStage == 1) {
      return <FirstStage handleSignUpStageChange={handleSignUpStageChange} />;
    } else if (signUpStage == 2) {
      return <SecondStage handleSignUpStageChange={handleSignUpStageChange} />;
    } else if (signUpStage == 3) {
      return <ThirdStage handleSignUpStageChange={handleSignUpStageChange} />;
    } else {
      return <div>error bitch</div>;
    }
  };

  const getStageHolderClassName = (state: number) => {
    return state === signUpStage
      ? "signup-stage-holder-item-active"
      : "signup-stage-holder-item-deactive";
  };
  return (
    <SignUpPagePresenter
      FormComponent={getCurrentStageForm()}
      getStageHolderClassName={getStageHolderClassName}
    />
  );
};

export default SignUpPageContainer;
