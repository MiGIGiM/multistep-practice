import { motion } from "framer-motion"
import { FC, PropsWithChildren, useMemo } from "react"

type Props = {
    title: String
    description: String
} & PropsWithChildren

const FormStepContainer: FC<Props> = ({
    title,
    description,
    children,
}) => {
    return (
    <motion.div className="form--wrapper"
      initial={{opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
    </motion.div>
)
}


 
export default FormStepContainer;