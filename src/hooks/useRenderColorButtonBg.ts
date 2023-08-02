import { useCallback } from "react";
import { FOCUS, SHORT_BREAK } from "../utils/CONSTANTS.ts";
import { COLORS } from "../utils/STYLE_CONSTANTS.ts";

const useRenderColorButtonBg = (activeType: string) => {

    const renderColorButtonBg = useCallback((): string => {
        if (activeType === FOCUS) {
            return COLORS.bgBtnRed
        }
        if (activeType === SHORT_BREAK) {
            return COLORS.bgBtnGreen
        }
        return COLORS.bgBtnBlue
    }, [activeType])

    return {
        renderColorButtonBg
    }
}

export default useRenderColorButtonBg