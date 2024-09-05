import { Controller, Control, RegisterOptions } from "react-hook-form";
import { FormValue } from "../App";
import { FC } from "react";
import TextInput from "./TextInput";

type Props = {
    control: Control<FormValue, any>
    name: 'name' | 'email' | 'phone'
    placeholder: string
    label: string
    rules?: RegisterOptions<FormValue, "name" | "email" | "phone">
}

const Input: FC<Props> = ({
    control,
    label,
    name,
    placeholder,
    rules
}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={{ required: "This field is required", ...rules }}
            render={({field, fieldState: {error}}) => (
                <TextInput
                    label={label}
                    placeholder={placeholder}
                    name={field.name}
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    value={field.value || ''}
                    error={error?.message}
                />
            )}
        />
    )
}

export default Input
