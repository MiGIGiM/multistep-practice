import { useFormContext } from "react-hook-form";
import { FormValue } from "../../App";
import FormStepContainer from "../FormStepContainer";
import { FC, useMemo } from "react";
import { plans } from "./SelectPlanStep";
import { filterArrayByString } from "../../utils";
import { addons } from "./AddonStep";

type SummaryStepProps = {
    onStepChange: () => void;
}
const SummaryStep: FC<SummaryStepProps> = ({ onStepChange }) => {
    const { getValues} = useFormContext<FormValue>()

    const formValues = getValues()

    const selectedPlan = filterArrayByString(formValues.plan, plans)
    const selectedAddons = formValues.addon.map((addon) => filterArrayByString(addon, addons))

    const total = useMemo(() => {
        const planPrice = selectedPlan?.pricing[formValues.monthlyPayment ? 'monthly' : 'yearly']

        const addonsPrice = selectedAddons?.reduce((acc, addon) => acc + (addon?.pricing[formValues.monthlyPayment ? 'monthly' : 'yearly'] ?? 0) , 0)

        return (planPrice || 0) + addonsPrice
    }, [formValues, selectedAddons, selectedPlan])
    
    return (
    <FormStepContainer key="summary" title="Finishing up" description="Double-check everything looks OK before confirming.">
        <>
            <div className="form-group--summary">
                <div
                    className={`form-group--summary--plan ${ formValues.addon.length !== 0 ? 'addons-selected' : ''}`}
                    
                >
                    <div className="">
                        <p className="form-group--title">{`${selectedPlan?.name} (${formValues.monthlyPayment ? 'Monthly' : 'Yearly'})`}</p>
                        <button className="form-group--change" onClick={onStepChange}>Change</button>
                    </div>
                    <p className="form-group--price">{`$${selectedPlan?.pricing[formValues.monthlyPayment ? 'monthly' : 'yearly']}/${formValues.monthlyPayment ? 'mo' : 'year'}`}</p>
                </div>
                <div className="form-group--addon-container">
                    {
                        selectedAddons?.map((addon) => (
                            <div className="form-group--summary--addon" key={addon?.name}>
                                <p className="form-group--title">{addon?.name}</p>
                                <p className="form-group--price">{`+$${addon?.pricing[formValues.monthlyPayment ? 'monthly' : 'yearly']}/${formValues.monthlyPayment ? 'mo' : 'year'}`}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="form-group--total">
                <p className="form-group--title">Total (per {formValues.monthlyPayment ? 'month' : 'year'})</p>
                <p className="form-group--price">{`$${total}/${formValues.monthlyPayment ? 'mo' : 'year'}`}</p>
            </div>
        </>
    </FormStepContainer>
    );
}
 
export default SummaryStep;