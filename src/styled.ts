import styled from "styled-components";
import {  FONTS } from "./utils/STYLE_CONSTANTS.ts";

interface Props {
    colorBg?: string
    bgTopBtn?:string
}

export const WrapperApp = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  background: ${({colorBg}) => colorBg};
  margin: 0;
  padding: 0;
  font-family: ${FONTS.font};
  font-weight: ${FONTS.fontWeight400};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const ControlPanel = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 15px;

  .play {
    width: 96px;
    height: 86px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    background: ${({bgTopBtn}) => bgTopBtn};
    display: flex;
    align-items: center;
    justify-content: center;


    svg {
      width: 35px;
      height: 35px;
    }
  }

  .next {
    width: 56px;
    height: 56px;
    background: ${({colorBg}) => colorBg};
    border-radius: 15px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .menu {
    width: 56px;
    height: 56px;
    background: ${({colorBg}) => colorBg};
    border-radius: 15px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 40px;
      height: 40px;
    }
  }
`;


