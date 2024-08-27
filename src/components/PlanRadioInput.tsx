import { forwardRef } from "react";

type Props = {
    value: string;
    checked: boolean;
    onChange: () => void;
    name: string;
    planData: {
        name: string;
        price: string;
        icon: string;
        offer?: string;
    }
}

const PlanRadioInput = forwardRef<HTMLInputElement, Props>(({value, checked, onChange, name, planData}, ref) => {
    return (
        <div className="form-group--radio">
            <input
                type="radio"
                id={planData.name}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                ref={ref}
            />
            <label htmlFor={planData.name}>
                <img src={planData.icon} alt={planData.name} />
                <div>
                    <p className="form-group--title">{planData.name}</p>
                    <p className="form-group--price">{planData.price}</p>
                    {planData.offer && <p className="form-group--offer">{planData.offer}</p>}
                </div>
            </label>

        </div>
    )
})

export default PlanRadioInput