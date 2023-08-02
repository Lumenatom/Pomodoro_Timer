import { useCallback } from "react";
import { FOCUS, SHORT_BREAK } from "../utils/CONSTANTS.ts";
import { COLORS } from "../utils/STYLE_CONSTANTS.ts";

const useRenderColorTopButtonBg = (activeType: string) => {

    const renderColorTopButtonBg = useCallback((): string => {
        if (activeType === FOCUS) {
            return COLORS.topBtnRed
        }
        if (activeType === SHORT_BREAK) {
            return COLORS.topBtnGreen
        }
        return COLORS.topBtnBlue
    }, [activeType])

    return {
        renderColorTopButtonBg
    }
}

export default useRenderColorTopButtonBg