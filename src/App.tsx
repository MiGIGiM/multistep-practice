import { Controller, FormProvider, useForm } from "react-hook-form";
import TextInput from "./components/TextInput";
import Switch from "./components/Switch";
import { useToggle } from "./hooks/useToggle";
import RadioInput from "./components/RadioInput";
import CheckBox from "./components/CheckBox";
import PersonalInfoStep from "./components/steps/PersonalInfoStep";
import SelectPlanStep from "./components/steps/SelectPlanStep";
import AddonStep from "./components/steps/AddonStep";
import { useState } from "react";
import { useMultiStep } from "./hooks/useMultiStep";
import SummaryStep from "./components/steps/SummaryStep";
import { AnimatePresence } from "framer-motion";

export type FormValue = {
  name: string;
  plan: string;
  email: string;
  phone: string;
  monthlyPayment: boolean;
  addon: string[]
}



const App = () => {
  const methods = useForm<FormValue>({
    defaultValues: {
      name: "",
      plan: '',
      monthlyPayment: false,
      addon: []
    }
  })

  const steps = [
    <PersonalInfoStep />,
    <SelectPlanStep />,
    <AddonStep />,
    <SummaryStep onStepChange={() => goToStep(1)} />
  ]

  const isFormValid = methods.formState.isValid

  const {
    currentActiveIndex,
    currentStep,
    nextStep,
    prevStep,
    goToStep,
    isFirstStep,
    isLastStep,
    isStepVisited
  } = useMultiStep(steps)

  const onSubmit = (data: FormValue) => {

    if (!isLastStep) {
      nextStep();
    } else {
      console.log(data);
      
    }
  }

  return (
    <FormProvider {...methods}>
      <div className="form--step-container">
        <div className="form--steps">
          {
            Array
              .from({ length: steps.length })
              .map((_, index) => (
                <button key={`btn-${index}`} className={`form--step ${currentActiveIndex === index ? 'active' : ''}`} onClick={() => {
                  if (isStepVisited(index)) goToStep(index)
                }}>
                  {index + 1}
                </button>
              ))
          }
        </div>
      </div>
      
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <AnimatePresence initial={false}>
          {currentStep}
        </AnimatePresence>
        <div className="form--actions">
          {!isFirstStep && <button type="button" onClick={prevStep}>Back</button>}
          <button type="submit">Next Step</button>
        </div>
      </form>
    </FormProvider>
  );
}
 
export default App;