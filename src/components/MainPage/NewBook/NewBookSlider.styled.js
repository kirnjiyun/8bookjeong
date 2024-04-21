import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  @import url('//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css');
`;
export default GlobalStyle;

export const NewBookSlider = styled.section`
  padding: 0% 0;
  font-family: 'Anton', sans-serif;
  font-size: clamp(100px, 7vw, 140px);

  @media (max-width: 768px) {
    margin: 0 -15px;
  }
`;

export const CarouselContainer = styled.div`
  padding: 25px 0;
  overflow: hidden;
`;

export const NewBookCardDiv = styled.div`
  padding-left: 7px;
`;
