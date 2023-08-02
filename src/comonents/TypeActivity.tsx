import { FC, useCallback } from "react";
import { FOCUS, LONG_BREAK, SHORT_BREAK } from "../utils/CONSTANTS.ts";
import { WrapperTypeActivity } from "./styled.ts";
import { BsCupHot, TbBrain } from "react-icons/all";
import useRenderColor from "../hooks/useRenderColor.ts";
import useRenderColorButtonBg from "../hooks/useRenderColorButtonBg.ts";

type Props = {
    activeType: string;
}

const TypeActivity: FC<Props> = ({activeType}) => {
    const {renderColorButtonBg} = useRenderColorButtonBg(activeType)
    const {renderColor} = useRenderColor(activeType)

    const renderActiveType = useCallback(() => {
        switch (activeType) {
            case FOCUS :
                return (
                    <WrapperTypeActivity bgColor={renderColorButtonBg()} color={renderColor()}>
                        <TbBrain/>
                        <h3>Focus</h3>
                    </WrapperTypeActivity>
                )
            case SHORT_BREAK :
                return (
                    <WrapperTypeActivity bgColor={renderColorButtonBg()} color={renderColor()}>
                        <BsCupHot/>
                        <h3>Short break</h3>
                    </WrapperTypeActivity>
                )
            case LONG_BREAK :
                return (
                    <WrapperTypeActivity bgColor={renderColorButtonBg()} color={renderColor()}>
                        <BsCupHot/>
                        <h3>Long break</h3>
                    </WrapperTypeActivity>
                )
            default :
                return <div>sfds</div>
        }
    }, [activeType])

    return (
        <>{renderActiveType()}</>
    )
}

export default TypeActivity