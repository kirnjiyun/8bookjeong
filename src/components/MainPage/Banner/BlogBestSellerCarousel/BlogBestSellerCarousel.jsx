import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './blogBestSellerCarousel.styled';

export default function BlogBestSellerCarousel({ items }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const colors = [
    'rgb(255, 229, 204)', // 밝은 크림색
    'rgb(255, 235, 205)', // 밝은 살구색
    'rgb(255, 248, 220)', // 밝은 아이보리색
    'rgb(255, 222, 173)', // 밝은 네이플스 옐로우
    'rgb(255, 245, 238)', // 아주 밝은 핑크
    'rgb(255, 239, 213)', // 아주 밝은 오렌지
    'rgb(255, 228, 225)', // 아주 밝은 로즈
    'rgb(255, 240, 245)', // 밝은 라벤더 핑크
    'rgb(255, 250, 240)', // 밝은 플로랄 화이트
    'rgb(255, 245, 230)', // 밝은 모카 크림
    'rgb(255, 255, 240)', // 밝은 아이보리
    'rgb(255, 250, 205)', // 밝은 레몬색
    'rgb(255, 239, 213)', // 밝은 복숭아색
    'rgb(255, 248, 220)', // 밝은 골드톤 아이보리
    'rgb(255, 240, 245)', // 밝은 라일락 핑크
    'rgb(255, 250, 250)', // 밝은 스노우 화이트
    'rgb(255, 235, 205)', // 밝은 밀크 초콜릿색
    'rgb(255, 250, 205)', // 밝은 라이트 옐로우
    'rgb(255, 255, 224)', // 밝은 레몬 체리
    'rgb(255, 245, 238)' // 밝은 화이트 오렌지
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [items]);

  if (!items) {
    return 'no';
  }

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + items.length) % items.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
  };

  const goToBookDetailPage = (isbn) => {
    navigate(`/products/${isbn}`);
  };

  const slidesPerView = window.innerWidth >= 768 ? 2 : 1;

  return (
    <S.CarouselContainer>
      <S.CarouselSlider style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}>
        {items.map((book, index) => (
          <S.CarouselSlide
            key={index}
            $backgroundColor={colors[index % colors.length]}
            onClick={() => goToBookDetailPage(book.isbn)}
            $slidesPerView={slidesPerView}>
            <S.SlideImage>
              <S.SlideImageContent $backgroundImage={book.cover} />
            </S.SlideImage>
            <S.SlideContent>
              <S.SlideTitle>{book.title}</S.SlideTitle>
              <S.SlideDescription>
                <S.SlideInfo>
                  <div>{book.author}</div>
                  <div>{book.publisher}</div>
                </S.SlideInfo>
              </S.SlideDescription>
            </S.SlideContent>
          </S.CarouselSlide>
        ))}
      </S.CarouselSlider>
      <S.SlideIndex>
        {Math.floor(currentSlide / slidesPerView) + 1} / {Math.ceil(items.length / slidesPerView)}
      </S.SlideIndex>
      <S.SlideControls>
        <S.ControlButton onClick={goToPrevSlide}>&lt;</S.ControlButton>
        <S.ControlButton onClick={goToNextSlide}>&gt;</S.ControlButton>
      </S.SlideControls>
      <S.SlideIndicators>
        {Array.from({ length: Math.ceil(items.length / slidesPerView) }).map((_, index) => (
          <S.IndicatorButton
            key={index}
            onClick={() => goToSlide(index * slidesPerView)}
            $active={index === Math.floor(currentSlide / slidesPerView)}
          />
        ))}
      </S.SlideIndicators>
    </S.CarouselContainer>
  );
}
