import { Control, Controller } from "react-hook-form"
import { FormValue } from "../App"
import { FC } from "react"
import AddOnsCheckBoxes from "./AddOnsCheckBoxes"

type Props = {
    control: Control<FormValue, any>
    name: 'addon',
    addon: Addon,
    isMonthly: boolean
}

const CheckBox: FC<Props> =  ({control, name, addon, isMonthly = false}) => (
    <Controller
        control={control}
        name={name}
        render={({field}) => (
            <AddOnsCheckBoxes
                addonData={{
                    name: addon.name,
                    description: addon.description,
                    price: isMonthly ? addon.pricing.monthly : addon.pricing.yearly
                }}
                checked={field.value.includes(addon.name.replaceAll(" ", "-").toLowerCase())}
                onChange={(e) => {
                  const newValue = [...field.value];
                  if (e.target.checked) {
                    newValue.push(addon.name.replaceAll(" ", "-").toLowerCase());
                  } else {
                    newValue.splice(newValue.indexOf(addon.name.replaceAll(" ", "-").toLowerCase()), 1);
                  }
                  field.onChange(newValue);
                }}
                name={field.name}
                value={addon.name.replaceAll(" ", "").toLowerCase()}
            />
        )}
    />
)

export default CheckBox