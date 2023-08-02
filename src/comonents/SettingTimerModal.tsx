import  { FC } from "react";
import { AiOutlineClose } from "react-icons/all";
import { HeaderModal, ModalContent, ModalWrapper, SettingModal, ToggleButton } from "./styled.ts";
import useRenderColorBg from "../hooks/useRenderColorBg.ts";

type Props = {
    activeType: string;
    darkMode: boolean;
    setVisibleModal: (e: boolean) => void;
    notificationOn: boolean;
    setNotificationOn: (e: boolean) => void;
    focusTime: number;
    shortBreakTime: number;
    longBreakTime: number;
    setDarkMode: (e: boolean) => void;
    setFocusTime: (e: number) => void;
    setShortBreakTime: (e: number) => void;
    setLongBreakTime: (e: number) => void;
}
const SettingTimerModal: FC<Props> = ({
                                          setDarkMode,
                                          focusTime,
                                          shortBreakTime,
                                          longBreakTime,
                                          activeType,
                                          darkMode,
                                          setVisibleModal,
                                          notificationOn,
                                          setNotificationOn,
                                          setFocusTime,
                                          setShortBreakTime,
                                          setLongBreakTime,
                                      }) => {

    const {renderColorBg} = useRenderColorBg(activeType, darkMode)


    return (
        <ModalWrapper>
            <ModalContent colorBg={renderColorBg()}>
                <HeaderModal colorBg={renderColorBg()}>
                    <AiOutlineClose onClick={() => setVisibleModal(false)}/>
                </HeaderModal>
                <SettingModal colorBg={renderColorBg()}>
                    <ToggleButton colorBg={renderColorBg()} onClick={() => setNotificationOn(!notificationOn)}>
                        <h3>Notification</h3>
                        <div className={notificationOn ? 'active' : 'required'}>
                            <div className="button"/>
                        </div>
                    </ToggleButton>
                    <label>
                        Focus length
                        <input type="number" value={focusTime} onChange={(e) => setFocusTime(Number(e.target.value))}/>
                    </label>
                    <label>
                        Short break length
                        <input type="number" value={shortBreakTime}
                               onChange={(e) => setShortBreakTime(Number(e.target.value))}/>
                    </label>
                    <label>
                        Long break length
                        <input type="number" value={longBreakTime}
                               onChange={(e) => setLongBreakTime(Number(e.target.value))}/>
                    </label>
                    <ToggleButton colorBg={renderColorBg()} onClick={() => setDarkMode(!darkMode)}>
                        <h3>Dark Mode</h3>
                        <div className={darkMode ? 'active' : 'required'}>
                            <div className="button"/>
                        </div>
                    </ToggleButton>
                </SettingModal>
            </ModalContent>
        </ModalWrapper>
    )
}

export default SettingTimerModal