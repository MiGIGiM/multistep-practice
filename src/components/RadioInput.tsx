import { FC } from "react"
import { Control, Controller } from "react-hook-form"
import PlanRadioInput from "./PlanRadioInput"
import { FormValue } from "../App"

type Props = {
    control: Control<FormValue, any>
    name: "plan"
    isMonthly: boolean
    plan: Plan
}

const RadioInput: FC<Props> =  ({control, name, plan, isMonthly = false}) => (
    <Controller
        control={control}
        name={name}
        rules={{ required: "Please select a plan" }}
        render={({field}) => (
            <PlanRadioInput
                planData={{
                    name: plan.name,
                    price: isMonthly ? plan.pricing.monthly : plan.pricing.yearly,
                    icon: plan.icon,
                    offer: isMonthly ? undefined : plan.offer
                }}
                checked={field.value === plan.name.toLowerCase()}
                onChange={field.onChange}
                name={field.name}
                value={plan.name.toLowerCase()}
            />
        )}
    />
)

export default RadioInput