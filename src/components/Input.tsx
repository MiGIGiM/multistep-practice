import { Controller, Control } from "react-hook-form";
import { FormValue } from "../App";
import { FC } from "react";
import TextInput from "./TextInput";

type Props = {
    control: Control<FormValue, any>
    name: 'name' | 'email' | 'phone'
    placeholder: string
    label: string
}

const Input: FC<Props> = ({
    control,
    label,
    name,
    placeholder
}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={{ required: "This field is required" }}
            render={({field, fieldState: {error}}) => (
                <TextInput
                    label={label}
                    placeholder={placeholder}
                    name={field.name}
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    value={field.value}
                    error={error?.message}
                />
            )}
        />
    )
}

export default Input
