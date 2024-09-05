import { FC } from "react";

type Props = {
    checked: boolean;
    onChange: (e: any) => void;
    activeText: string;
    inactiveText: string;
    name: 'monthlyPayment';
}

const Switch: FC<Props> = ({checked, onChange, activeText, inactiveText, name}) => {
    return (
        <div className="switch--wrapper">
            <input
                type="checkbox"
                name={name}
                id="switch"
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor="switch">
                <p className={checked ? "switch--active" : ""}>{activeText}</p>
                <div className={`switch--slider ${checked ? "switch--active" : ""}`}>
                    <div className="switch--circle"/>
                </div>
                <p className={!checked ? "switch--active" : ""}>{inactiveText}</p>
            </label>
        </div>
    );
}
 

export default Switch;