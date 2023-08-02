import styled from "styled-components";
import { COLORS, FONTS } from "../utils/STYLE_CONSTANTS.ts";

type PropsActivity = {
    bgColor?: string;
    color?: string;
    colorBg?:string;
}
type PropsTimer = {
    timerStart: boolean;
}
export const WrapperTypeActivity = styled.div<PropsActivity>`
  display: flex;
  align-items: center;
  gap: 5px;
  background: ${({bgColor}) => bgColor};
  padding: 8px 15px;
  border-radius: 25px;
  border: 2px solid ${({color}) => color};;

  svg {
    width: 20px;
    height: 20px;
    color: ${({color}) => color};
  }

  h3 {
    font-weight: 400;
    margin: 0;
    font-size: ${FONTS.size16};
    color: ${({color}) => color};
  }
`

export const WrapperTimer = styled.div<PropsTimer>`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 177px;

  h2 {
    margin: 0;
    padding: 0;
    color: ${({color}) => color};
    font-size: 150px;
    line-height: 80%;
    font-weight: ${({timerStart}) => timerStart ? FONTS.fontWeight500 : FONTS.fontWeight300};
  }
`;

export const NotificationWrapper = styled.div`
  background: white;
  width: 320px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.039), 0px 5.5px 16px rgba(0, 0, 0, 0.19);
  position: fixed;
  bottom: 3%;
  right: 1%;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.15px;
  font-weight: ${FONTS.fontWeight300};
  gap: 10px;
`
export const ButtonPanel = styled.div`
  display: flex;
  gap: 50px;
button{
  cursor: pointer;
  border: none;
  background: none;
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.15px;
  font-weight: ${FONTS.fontWeight300};
  padding: 2px 10px;
}
  
  .okey{
    border: 1px solid ${COLORS.black};
    border-radius: 5px;
  }
  .next{
    background: ${COLORS.bgBtnGreen};
    border: 1px solid ${COLORS.darkGreen};
    border-radius: 5px;
  }
`

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
`;
export const ModalContent = styled.div<PropsActivity>`
  width: 400px;
  height: 400px;
  padding: 15px;
  box-shadow: ${({colorBg}) => colorBg === COLORS.black ? '0px 1px 6px rgba(255, 255, 255, 0.039), 0px 5.5px 16px rgba(255, 255, 255, 0.19);' : '0px 1px 6px rgba(0, 0, 0, 0.039), 0px 5.5px 16px rgba(0, 0, 0, 0.19);'};
  border-radius: 24px;
  background: ${({colorBg}) => colorBg === COLORS.black ? '#040D06' : colorBg};

`;
export const HeaderModal = styled.div<PropsActivity>`
  display: flex;
  justify-content: flex-end;

  svg {
    fill: ${({colorBg}) => colorBg === COLORS.black ? COLORS.white : COLORS.black};
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

`;
export const SettingModal = styled.div<PropsActivity>`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-top: 35px;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.15px;
  font-weight: ${FONTS.fontWeight300};
  color: ${({colorBg}) => colorBg === COLORS.black ? COLORS.white : COLORS.black};


  label {
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      width: 96px;
      height: 40px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 8px;
    }
  }

`;


export const ToggleButton = styled.div<PropsActivity>`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  margin: 15px 0;
  cursor: pointer;
  color: ${COLORS.black};

  h3 {
    margin: 0;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.15px;
    color: ${({colorBg}) => colorBg === COLORS.black ? COLORS.white : COLORS.black};
    font-weight: ${FONTS.fontWeight300};
  }

  .active {
    padding: 0 2px;
    width: 40px;
    height: 25px;
    background: gray;

    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 20px;
    justify-content: flex-end;
    transition: all 0.1s linear;

    .button {
      background: white;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }

  .required {
    padding: 0 2px;
    width: 40px;
    height: 25px;
    background: #b6acac;
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 20px;
    justify-content: flex-start;
    transition: all 0.1s linear;

    .button {
      background: white;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
`;