import { useCallback } from "react";
import { FOCUS, SHORT_BREAK } from "../utils/CONSTANTS.ts";
import { COLORS } from "../utils/STYLE_CONSTANTS.ts";

const useRenderColor = (activeType: string, darkMode?: boolean) => {

    const renderColor = useCallback((mode?:boolean): string => {
        if (mode) {
            if (activeType === FOCUS) {
                return COLORS.darkModeRed
            }
            if (activeType === SHORT_BREAK) {
                return COLORS.darkModeGreen
            }
            return COLORS.darkModeBlue
        } else {
            if (activeType === FOCUS) {
                return COLORS.darkPink
            }
            if (activeType === SHORT_BREAK) {
                return COLORS.darkGreen
            }
            return COLORS.darkBlue
        }


    }, [darkMode, activeType])

    return {
        renderColor
    }
}

export default useRenderColor