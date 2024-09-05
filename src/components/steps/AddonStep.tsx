import { useFormContext } from "react-hook-form";
import { FormValue } from "../../App";
import CheckBox from "../CheckBox";
import FormStepContainer from "../FormStepContainer";

export const addons = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    pricing: {
      monthly: 1,
      yearly: 10
    }
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    pricing: {
      monthly: 2,
      yearly: 20
    }
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    pricing: {
      monthly: 2,
      yearly: 20
    }
  }
]

const AddonStep = () => {
    const {control, getValues} = useFormContext<FormValue>()
    const {monthlyPayment} = getValues()
    return ( 
        <FormStepContainer key="addon" title="Pick add-ons" description="Add-ons help enhance your gaming experience">
            {addons.map((addon, index) => (
                <CheckBox
                control={control}
                isMonthly={monthlyPayment}
                    key={index}
                    name="addon"
                    addon={addon}
                />
            ))}
        </FormStepContainer>
     );
}
 
export default AddonStep;