import { FC } from "react";
import { ButtonPanel, NotificationWrapper } from "./styled.ts";

type Props = {
    activeType: string;
    setVisibleNotification: (e: boolean) => void;
    nextActivity: () => void;
    setTimerStart: (e: boolean) => void;
}
const NotificationModal: FC<Props> = ({activeType, setVisibleNotification, nextActivity, setTimerStart}) => {

    return (
        <NotificationWrapper>{activeType} finished <ButtonPanel>
            <button className='okey' onClick={() => {
                setVisibleNotification(false)
                nextActivity()
            }}>OK
            </button>
            <button className='next' onClick={() => {
                setVisibleNotification(false)
                nextActivity()
                setTimerStart(true)
            }}>
                Next step
            </button>
        </ButtonPanel>
        </NotificationWrapper>
    )
}

export default NotificationModal