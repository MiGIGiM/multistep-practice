import { useFormContext } from "react-hook-form";
import FormStepContainer from "../FormStepContainer";
import Input from "../Input";
import { FormValue } from "../../App";

const PersonalInfoStep = () => {
    const {control } = useFormContext<FormValue>()
    return (
        <FormStepContainer
            key="personalInfo"
            title="Personal Info"
            description="Please provide your name, email address, and phone number.">
            <Input control={control} label="Name" name="name" placeholder="e.g. Stephen King" />
            <Input
                control={control}
                label="Email Address"
                name="email"
                placeholder="e.g. stephenking@example.com"
                rules={{
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                    }
                }}/>
            <Input
                control={control}
                label="Phone Number"
                name="phone"
                placeholder="e.g. +1 234 567 890"
                rules={{
                    pattern: {
                        value: /^\d+$/,
                        message: "Invalid phone number"
                    },
                    minLength: {
                        value: 8,
                        message: "Must be at least 8 digits"
                    },
                    maxLength: {
                        value: 10,
                        message: "Must be at most 10 digits"
                    }
                }}/>
        </FormStepContainer>
    );
}
 
export default PersonalInfoStep;