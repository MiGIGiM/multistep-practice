import { Controller, useFormContext } from "react-hook-form";
import { FormValue } from "../../App";
import FormStepContainer from "../FormStepContainer";
import RadioInput from "../RadioInput";
import Switch from "../Switch";
import { AnimatePresence, motion } from "framer-motion";

export const plans = [
  {
    name: "Arcade",
    pricing: {
      monthly: 9,
      yearly: 90
    },
    icon: "/assets/images/icon-arcade.svg",
    offer: "2 months free"
  },
  {
    name: "Advanced",
    icon: "/assets/images/icon-advanced.svg",
    offer: "2 months free",
    pricing: {
      monthly: 12,
      yearly: 120
    }
  },
  {
    name: "Pro",
    icon: "/assets/images/icon-pro.svg",
    offer: "2 months free",
    pricing: {
      monthly: 15,
      yearly: 150
    }
  }
]

const SelectPlanStep = () => {
    const {control, watch, formState: { errors }} = useFormContext<FormValue>()
    const monthlyPayment = watch('monthlyPayment')
    return (
        <FormStepContainer key="selectPlan" title="Select your plan" description="You have the option of monthly or yearly billing.">
            {plans.map((plan, index) => (
                <RadioInput
                    control={control}
                    key={index}
                    name="plan"
                    plan={plan}
                    isMonthly={monthlyPayment}
                />
            ))}
            <AnimatePresence>
              {errors.plan && <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="form-group--error">
                  {errors.plan.message}
                </motion.p>
              }
            </AnimatePresence>
            <Controller
                control={control}
                name="monthlyPayment"
                render={({ field }) => (
                <Switch
                    checked={field.value}
                    onChange={(e) => {
                    field.onChange(e.target.checked)
                    }}
                    name={field.name}
                    activeText="Monthly"
                    inactiveText="Yearly" />
                )}
            />
            
        </FormStepContainer>
    );
}
 
export default SelectPlanStep;