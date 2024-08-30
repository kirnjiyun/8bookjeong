import React from 'react';
import Banner from '../../components/MainPage/Banner/Banner';
import BestsellerBook from '../../components/MainPage/BestsellerBook/BestsellerBook';
import ChoiceBook from '../../components/MainPage/ChoiceBook/ChoiceBook';
import NewBook from '../../components/MainPage/NewBook/NewBook';
import * as S from './mainPage.styled';
import AdBanner from '../../components/MainPage/AdBanner/AdBanner';

export default function MainPage() {
  return (
    <>
      <S.MainPageLayout>
        <Banner />
        <BestsellerBook />
        <AdBanner />
        <ChoiceBook />
        <NewBook />
      </S.MainPageLayout>
    </>
  );
}
