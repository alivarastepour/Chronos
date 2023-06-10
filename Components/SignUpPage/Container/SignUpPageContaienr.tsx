import { useState } from "react";
import dynamic from "next/dynamic";

import SignUpPagePresenter from "../Presenter/SignUpPagePresenter";
import type {
  TfirstStageForm,
  TsecondStageForm,
  TshouldStageChangeRT,
  TsignUpState,
  TthirdStageForm,
} from "../SignUpPage.types";
import {
  getFieldValidators,
  getFormFields,
  handleSignUpErrors,
} from "../util/signup.handlers";

const FirstStage = dynamic(() => import("../Presenter/FirstStage"), {
  loading: () => <div>hi</div>,
});
const SecondStage = dynamic(() => import("../Presenter/SecondStage"), {
  loading: () => <div>hi</div>,
});
const ThirdStage = dynamic(() => import("../Presenter/ThirdStage"), {
  loading: () => <div>hi</div>,
});

const SignUpPageContainer: React.FC = () => {
  const [signUpStage, setSignUpStage] = useState<number>(1);

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

  const handleSignUpStageChange = (
    state: "next" | "prev" | "submit"
  ): (() => void) => {
    return state === "next"
      ? nextStage
      : state === "prev"
      ? prevStage
      : () => {};
  };

  /**
   *  given a form, finds its fields and their respective valditors and runs the validators
   *  on field values to determine if the value is valid or not. if values are valid, proceeds;
   *  if not, returns errors.
   * @param event the event that was triggered on form submit
   * @returns an object with two properties; shouldStageChange which is a boolean; errors which is a map
   * from fields to their errors.
   */
  const shouldStageChange = (event: React.FormEvent): TshouldStageChangeRT => {
    const form = event.target as any;
    const fields = getFormFields(form);
    const validationMap: Map<string, Function> = getFieldValidators(fields);

    /**
     * since validators do not have the same arity nor type, we need an utillity function to help us somehow generalize this procedure.
     * @param field current field to get its value
     * @param componentPrefix a prefix to be added to the name individual fields
     * @returns an array consisting of required args for the given field
     */
    const getValidatorArgs = (field: string, componentPrefix: string) => {
      let val: "value" | "checked" = field.includes("checkbox")
        ? "checked"
        : "value";

      return field === `${componentPrefix}-passwordR`
        ? [form[`${componentPrefix}-password`][val], form[field][val]]
        : [form[field][val]];
    };

    const errors = new Map<string, string>();
    let hasError: boolean = false;
    for (const [field, validator] of validationMap.entries()) {
      const value = getValidatorArgs(field, "signup");
      const isFieldValid = validator(...value);
      if (isFieldValid !== "") {
        hasError = true;
      }
      errors.set(field, isFieldValid);
    }
    return { shouldStageChange: !hasError, errors: errors };
  };

  const getCurrentStageComponent = () => {
    const Component =
      signUpStage === 1
        ? FirstStage
        : signUpStage === 2
        ? SecondStage
        : ThirdStage;

    return Component;
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
    // @ts-ignore
    <CurrentFormComponent
      handleSignUpStageChange={handleSignUpStageChange}
      setSignUpState={setSignUpState}
      shouldStageChange={shouldStageChange}
      handleErrors={handleSignUpErrors}
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
