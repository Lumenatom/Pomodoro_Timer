import { FC, useCallback } from "react";
import { WrapperTimer } from "./styled.ts";
import useRenderColor from "../hooks/useRenderColor.ts";


type Props = {
    activeType: string;
    timerStart: boolean;
    darkMode: boolean;
    currentSecond: number;
    currentMillisecond: number;
}
const Timer: FC<Props> = ({activeType, timerStart, darkMode, currentSecond, currentMillisecond}) => {
    const {renderColor} = useRenderColor(activeType, darkMode)
    console.log(currentSecond)
    const renderTimer = useCallback(() => {
        return (
            <WrapperTimer color={renderColor(darkMode)} timerStart={timerStart}>
                <h2>{currentSecond < 10 ? `0${currentSecond}` : currentSecond}</h2>
                <h2>{currentMillisecond < 10 ? `0${currentMillisecond}` : currentMillisecond}</h2>
            </WrapperTimer>
        )
    }, [activeType, timerStart, currentSecond, currentMillisecond])


    return (
        <>{renderTimer()}</>
    )
}

export default Timer