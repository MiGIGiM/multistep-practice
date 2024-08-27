import { ChangeEvent, FocusEvent, forwardRef } from "react";

type Props = {
    label: string;
    value: string;
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: FocusEvent<HTMLInputElement, Element>) => void;
    name: string;
    error?: string
}


const TextInput = forwardRef<HTMLInputElement, Props>(({label, value, placeholder, onChange, onBlur, name, error }, ref) => {
    return (
        <div className="form-group">
            <div className="form-group--heading">
                <label htmlFor={name}>{label}</label>
                {error && <p className="form-group--error">{error}</p>}
            </div>
            <input
                id={name}
                name={name}
                value={value}
                className={error ? "form-group--error" : ""}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                type="text"
                ref={ref}
             />
             
        </div>
    );
})
 

export default TextInput;