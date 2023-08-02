import { FC, useCallback, useEffect, useState } from "react";
import {
    ControlPanel,
    WrapperApp
} from "./styled.ts";
import { FOCUS, LONG_BREAK, SHORT_BREAK } from "./utils/CONSTANTS.ts";
import TypeActivity from "./comonents/TypeActivity.tsx";
import useRenderColorBg from "./hooks/useRenderColorBg.ts";
import Timer from "./comonents/Timer.tsx";
import {
    AiOutlinePause,
    BiDotsHorizontalRounded,
    BsFillPlayFill,
    TbPlayerTrackNextFilled
} from "react-icons/all";
import useRenderColorButtonBg from "./hooks/useRenderColorButtonBg.ts";
import useRenderColorTopButtonBg from "./hooks/useRenderColorTopButtonBg.ts";
import NotificationModal from "./comonents/NotificationModal.tsx";
import SettingTimerModal from "./comonents/SettingTimerModal.tsx";

const App: FC = () => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const [visibleNotification, setVisibleNotification] = useState<boolean>(false)
    const [notificationOn, setNotificationOn] = useState<boolean>(true)
    const [stepFocus, setStepFocus] = useState<number>(1)
    const [activeType, setActiveType] = useState<string>(FOCUS)
    const [darkMode, setDarkMode] = useState<boolean>(false)
    const [timerStart, setTimerStart] = useState<boolean>(false)
    const [currentMillisecond, setCurrentMillisecond] = useState<number>(0)
    const [focusTime, setFocusTime] = useState<number>(25)
    const [shortBreakTime, setShortBreakTime] = useState<number>(5)
    const [longBreakTime, setLongBreakTime] = useState<number>(15)
    const [currentSecond, setCurrentSecond] = useState<number>(focusTime)


    const {renderColorBg} = useRenderColorBg(activeType, darkMode)

    const nextActivity = useCallback((): void => {
        switch (stepFocus) {
            case 1 :
                setTimerStart(false)
                setActiveType(SHORT_BREAK)
                setCurrentSecond(shortBreakTime)
                setCurrentMillisecond(0)
                setStepFocus(2)
                break
            case 2 :
                setTimerStart(false)
                setActiveType(FOCUS)
                setCurrentSecond(focusTime)
                setCurrentMillisecond(0)
                setStepFocus(3)
                break
            case 3 :
                setTimerStart(false)
                setActiveType(LONG_BREAK)
                setCurrentSecond(longBreakTime)
                setCurrentMillisecond(0)
                setStepFocus(4)
                break
            case 4 :
                setTimerStart(false)
                setActiveType(FOCUS)
                setCurrentSecond(focusTime)
                setCurrentMillisecond(0)
                setStepFocus(1)
                break
            default :
                break
        }
    }, [stepFocus]);
    const {renderColorButtonBg} = useRenderColorButtonBg(activeType)
    const {renderColorTopButtonBg} = useRenderColorTopButtonBg(activeType)

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        let interval
        if (timerStart) {
            interval = setInterval(() => {
                setCurrentMillisecond((prev) => prev - 1);
            }, 18);
        } else if (!timerStart) {
            clearInterval(interval);
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return () => clearInterval(interval);
    }, [timerStart]);

    useEffect(() => {
        if (currentSecond === 0 && currentMillisecond === 0) {
            setTimerStart(false)
            setVisibleNotification(true)
        } else {
            if (currentMillisecond < 0) {
                if (currentSecond === 0) {
                    // nextActivity()
                }
                setCurrentSecond((prev) => prev - 1)
                setCurrentMillisecond(59)
            }
        }
    }, [currentMillisecond])

    useEffect(() => {
        if (activeType === FOCUS) {
            setCurrentSecond(focusTime)
        }
        if (activeType === SHORT_BREAK) {
            setCurrentSecond(shortBreakTime)
        } else if (activeType === LONG_BREAK) {
            setCurrentSecond(longBreakTime)
        }


    }, [activeType, focusTime, shortBreakTime, longBreakTime])

    return (
        <WrapperApp colorBg={renderColorBg()}>
            <TypeActivity activeType={activeType}/>
            <Timer activeType={activeType} timerStart={timerStart} darkMode={darkMode} currentSecond={currentSecond}
                   currentMillisecond={currentMillisecond}/>
            <ControlPanel colorBg={renderColorButtonBg()} bgTopBtn={renderColorTopButtonBg()}>
                <button className='menu' onClick={() => setVisibleModal(!visibleModal)}><BiDotsHorizontalRounded/>
                </button>
                <button disabled={!currentSecond && !currentMillisecond} className='play'
                        onClick={() => setTimerStart(!timerStart)}>{timerStart ? <AiOutlinePause/> :
                    <BsFillPlayFill/>}</button>
                <button className='next' onClick={nextActivity}><TbPlayerTrackNextFilled/></button>
            </ControlPanel>
            {
                visibleModal &&
                <SettingTimerModal activeType={activeType} darkMode={darkMode} setVisibleModal={setVisibleModal}
                                   notificationOn={notificationOn} setNotificationOn={setNotificationOn} focusTime={focusTime} shortBreakTime={shortBreakTime} longBreakTime={longBreakTime} setDarkMode={setDarkMode} setFocusTime={setFocusTime} setShortBreakTime={setShortBreakTime} setLongBreakTime={setLongBreakTime}/>
            }
            {
                (visibleNotification && notificationOn) &&
                <NotificationModal activeType={activeType} setVisibleNotification={setVisibleNotification}
                                   nextActivity={nextActivity} setTimerStart={setTimerStart}/>
            }
        </WrapperApp>
    )
}

export default App
