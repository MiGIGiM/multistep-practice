import { Controller, useForm } from "react-hook-form";
import TextInput from "./components/TextInput";
import Switch from "./components/Switch";
import { useToggle } from "./hooks/useToggle";
import RadioInput from "./components/RadioInput";
import CheckBox from "./components/CheckBox";

export type FormValue = {
  name: string;
  plan: string;
  monthlyPayment: boolean;
  addon: string[]
}

const plans = [
  {
    name: "Arcade",
    pricing: {
      monthly: "$9/mo",
      yearly: "$90/year"
    },
    icon: "/assets/images/icon-arcade.svg",
    offer: "2 months free"
  },
  {
    name: "Advanced",
    icon: "/assets/images/icon-advanced.svg",
    offer: "2 months free",
    pricing: {
      monthly: "$12/mo",
      yearly: "$120/year"
    }
  },
  {
    name: "Pro",
    icon: "/assets/images/icon-pro.svg",
    offer: "2 months free",
    pricing: {
      monthly: "$15/mo",
      yearly: "$150/year"
    }
  }
]

const addons = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    pricing: {
      monthly: "$1/mo",
      yearly: "$10/year"
    }
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    pricing: {
      monthly: "$2/mo",
      yearly: "$20/year"
    }
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    pricing: {
      monthly: "$2/mo",
      yearly: "$20/year"
    }
  }
]

const App = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValue>({
    defaultValues: {
      name: "",
      plan: '',
      monthlyPayment: false,
      addon: []
    }
  })
  const {
    isActive: isMonthly,
    toggleActive: toggleMonthly
  } = useToggle()

  const onSubmit = (data: FormValue) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        rules={{ required: "This field is required" }}
        render={({field, formState: {errors}}) => (
          <TextInput
            label="Name"
            placeholder={"e.g. Stephen King"}
            error={errors.name?.message}
            {...field}
          />
        )}
      />
      {
        plans.map((plan) => (
          <RadioInput
            key={plan.name}
            control={control}
            name="plan"
            plan={plan}
            isMonthly={isMonthly}
          />
        ))
      }
      { errors.plan && <p className="form-group--error">{errors.plan.message}</p> }
      <Switch
        checked={isMonthly}
        onChange={toggleMonthly}
        activeText="Monthly"
        inactiveText="Yearly" />
      {
        addons.map((addon) => (
          <CheckBox
            key={addon.name}
            control={control}
            name="addon"
            addon={addon}
            isMonthly={isMonthly}
          />
        ))
      }
      <button type="submit">Submit</button>
    </form>
  );
}
 
export default App;