import { FC, useCallback } from "react";

type Props = {
    checked: boolean;
    onChange: () => void;
    activeText: string;
    inactiveText: string;
}

const Switch: FC<Props> = ({checked, onChange, activeText, inactiveText}) => {
    const handleOnChange = useCallback(() => {
        onChange();
    }, [onChange]);

    return (
        <div className="switch--wrapper">
            <input
                type="checkbox"
                name="monthly-payment"
                id="switch"
                checked={checked}
                onChange={handleOnChange}
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