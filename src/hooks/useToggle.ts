import { useState } from "react";

export function useToggle() {
    const [isActive, setActive] = useState(false);

    const toggle = () => {
        setActive(prev => !prev);
    }

    return {
        isActive, toggleActive: toggle
    };
}