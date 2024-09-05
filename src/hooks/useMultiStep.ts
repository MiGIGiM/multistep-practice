import { ReactNode, useEffect, useState } from "react";

export function useMultiStep(steps: ReactNode[]) {
    const [stepIndex, setStepIndex] = useState(0);
    const [stepsVisited, setStepVisited] = useState<Set<number>>(new Set());

    useEffect(() => {
        if (stepsVisited.has(stepIndex)) return
        setStepVisited(prev => new Set(prev).add(stepIndex))
    }, [stepIndex, stepsVisited])

    function nextStep() {
        if (stepIndex === steps.length - 1) return
        setStepIndex(prev => prev + 1);
    }

    function prevStep() {
        if (stepIndex === 0) return
        setStepIndex(prev => prev - 1);
    }

    function goToStep(index: number) {
        setStepIndex(index);
    }

    function isStepVisited(index: number) {
        return stepsVisited.has(index)
    }

    return {
        currentActiveIndex: stepIndex,
        currentStep: steps[stepIndex],
        nextStep,
        prevStep,
        goToStep,
        isFirstStep: stepIndex === 0,
        isLastStep: stepIndex === steps.length - 1,
        isStepVisited
    }
}