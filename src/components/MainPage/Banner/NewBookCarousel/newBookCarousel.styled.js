import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 400px;
  cursor: pointer;
  z-index: 100;
`;

export const CarouselSlider = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

export const CarouselSlide = styled.div`
  flex: 0 0 auto;
  width: 100%;
  box-sizing: border-box;
  background: ${(props) => `linear-gradient(270deg, ${props.backgroundColor}, rgba(0, 0, 0, 0.8))`};
`;

export const SlideImage = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  padding: 0 4rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SlideContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  left: 0;
  padding: 3rem 4rem;
  height: 100%;

  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 420px) {
    display: none;
  }
`;

export const SlideTitle = styled.h3`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  z-index: 20;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SlideImageContent = styled.div`
  width: 200px;
  height: 300px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  margin-left: auto;
  margin-right: 6rem;
  z-index: 10;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const SlideDescription = styled.div`
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SlideIndex = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  font-size: 0.8rem;
  background-color: rgb(255, 255, 255, 0.4);
  width: 3rem;
  height: 1.5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
`;

export const SlideInfo = styled.div`
  font-size: 0.8rem;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SlideControls = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const ControlButton = styled.button`
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 50%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const SlideIndicators = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

export const IndicatorButton = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  margin: 0 4px;
  border: none;
  cursor: pointer;
`;
