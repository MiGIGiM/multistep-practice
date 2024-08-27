import { forwardRef } from "react";

type Props = {
    addonData: {
        name: string;
        description: string;
        price: string;
    }
    value: string;    
    checked: boolean;
    onChange: (e: any) => void;
    name: string;
}

const AddOnsCheckBoxes = forwardRef<HTMLInputElement, Props>(({value, checked, onChange, name, addonData}, ref) => (
    <div className="form-group--checkbox">
        <input
            type="checkbox"
            id={addonData.name}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            ref={ref}
        />
        <label htmlFor={addonData.name}>
            <div className="custom-checkbox" />
            <div>
                <p className="form-group--title">{addonData.name}</p>
                <p className="form-group--description">{addonData.description}</p>
            </div>
            <p className="form-group--price">{addonData.price}</p>
        </label>
    </div>
))

export default AddOnsCheckBoxes