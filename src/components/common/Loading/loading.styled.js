import styled, { keyframes } from 'styled-components';
import { primaryColor, secondaryColor } from '../../../assets/style/globalStyle.styled';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

export const IsLoading = styled.div`
  display: inline-block;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 90;

  & > svg {
    animation: ${rotate} 2s linear infinite;
    width: 50px;
    height: 50px;
  }

  & > svg circle {
    stroke: ${secondaryColor};
    stroke-linecap: round;
    animation: ${dash} 1s ease-in-out infinite;
  }
`;
