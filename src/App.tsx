import { Controller, useForm } from "react-hook-form";
import TextInput from "./components/TextInput";
import Switch from "./components/Switch";
import { useToggle } from "./hooks/useToggle";
import RadioInput from "./components/RadioInput";
import CheckBox from "./components/CheckBox";
import Input from "./components/Input";
import FormStepContainer from "./components/FormStepContainer";

export type FormValue = {
  name: string;
  email: string;
  phone: string;
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

  const onSubmit = (data: FormValue) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <FormStepContainer
      title="Personal info"
      description="Please provide your name, email address and phone number"
      >
      <Input control={control} label="Name" name="name" placeholder="e.g. Stephen King" />
      <Input control={control} label="Email Address" name="email" placeholder="e.g. stephenking@lorem.com" />
      <Input control={control} label="Phone Number" name="phone" placeholder="e.g. +1 234 567 890" />
      <Controller
        control={control}
        name="monthlyPayment"
        render={({ field }) => (
          <Switch
            checked={field.value}
            onChange={(e) => {
              field.onChange(e.target.checked)
            }}
            name={field.name}
            activeText="Monthly"
            inactiveText="Yearly" />
        )}
      />
    </FormStepContainer>
      <button type="submit">Submit</button>
    </form>
  );
}
 
export default App;
