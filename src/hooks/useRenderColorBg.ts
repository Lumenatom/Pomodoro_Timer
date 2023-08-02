import { useCallback } from "react";
import { FOCUS, SHORT_BREAK } from "../utils/CONSTANTS.ts";
import { COLORS } from "../utils/STYLE_CONSTANTS.ts";

const useRenderColorBg = (activeType: string, darkMode: boolean) => {

    const renderColorBg = useCallback((): string => {
        if(darkMode){
            return COLORS.black
        } else {
            if (activeType === FOCUS) {
                return COLORS.lightPink
            }
            if (activeType === SHORT_BREAK) {
                return COLORS.lightGreen
            }
            return COLORS.lightBlue
        }

    }, [activeType, darkMode])

    return {
        renderColorBg
    }
}

export default useRenderColorBg