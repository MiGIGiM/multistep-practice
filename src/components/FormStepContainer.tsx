import React, { FC, PropsWithChildren, ReactNode } from "react"

type Props = {
    title: String
    description: String
} & PropsWithChildren

const FormStepContainer: FC<Props> = ({
    title,
    description,
    children,
}) => (
    <div className="form--wrapper">
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
    </div>
)


 
export default FormStepContainer;