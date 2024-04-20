import React, { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { useBookListQuery } from '../../../hooks/useBookList';
// import './NewBook.style.css';
import NewBookSlider from './NewBookSlider';
import * as S from './NewBook.styled';
import { ContentTitle } from '../../../assets/style/globalStyle.styled';

const NewBook = () => {
  ////////////////////////////// 2. 상품 리스트 API //ItemList.aspx //////////////////////////////
  // QueryType (*필수값)
  //   ㄴ Bestseller : 베스트셀러
  //   ㄴ ItemNewAll : 신간 전체 리스트
  //   ㄴ ItemNewSpecial : 주목할 만한 신간 리스트
  //   ㄴ ItemEditorChoice : 편집자 추천 리스트 (카테고리로만 조회 가능 - 국내도서/음반/외서만 지원)
  //   ㄴ BlogBest : 블로거 베스트셀러 (국내도서만 조회 가능)
  // start : 1이상, 양의 정수(기본값:1)           //검색결과 시작페이지
  // MaxResults : 1이상 100d이하 양의정수 기본값1 //검색결과 한페이지당 최대 출력개수
  // CategoryId : 양의정수 - 분야의 고유 번호(기본값:0, 전체) (참고 : 알라딘 모든 분야 카테고리) 특정 분야로 검색결과를 제한함
  // 알라딘카테고리파일url : https://image.aladin.co.kr/img/files/aladin_Category_CID_20210927.xls
  //api호출수정//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [start, setStart] = useState('1');
  const [maxResults, setMaxResults] = useState('10');
  const [categoryId, setCategoryId] = useState('0');
  const [querytype, setQuerytype] = useState('ItemNewSpecial');
  const {
    data: bookList,
    isLoading,
    isError,
    error,
    refetch
  } = useBookListQuery({ querytype, start, maxResults, categoryId });
  //api호출수정//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   if (bookList) {
  //     console.log('bookList', bookList);
  //   }
  // }, [bookList]);

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 5
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 4
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 3,
  //     slidesToSlide: 1
  //   }
  // };

  const responsive = {
    desktopL: {
      breakpoint: { max: 3000, min: 1800 },
      items: 5
    },
    desktopS: {
      breakpoint: { max: 1800, min: 1500 },
      items: 5
    },
    tabletL: {
      breakpoint: { max: 1500, min: 1000 },
      items: 4
    },
    mobileS: {
      breakpoint: { max: 1000, min: 464 },
      items: 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1
    }
  };

  return (
    <S.Title>
      <hr></hr>
      {/* <S.TitleName>{'신간'}</S.TitleName> */}
      <ContentTitle>신간</ContentTitle>
      {bookList && <NewBookSlider title={'신간'} books={bookList?.item} responsive={responsive} />}
    </S.Title>
  );
};

export default NewBook;
