import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './NewBookCard.styled';

const NewBookCard = ({ book }) => {
  const navigate = useNavigate();

  const goToBookDetailPage = (isbn) => {
    console.log(book); // 도서 정보를 콘솔에 출력
    navigate(`/products/${isbn}`);
  };

  const getSubstringBeforeWord = (inputString, word) => {
    const index = inputString.indexOf(word);
    return index !== -1 ? inputString.substring(0, index) : inputString;
  };

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (book) {
      setTitle(getSubstringBeforeWord(book.title, ' -'));
      setAuthor(getSubstringBeforeWord(book.author, '(지은이)'));
    }
  }, [book]);

  return (
    <S.NewBookCardBox>
      <S.NewBookCardImg $backgroundImage={book.cover} onClick={() => goToBookDetailPage(book.isbn)}>
        <S.NewBookTag>NEW</S.NewBookTag>
      </S.NewBookCardImg>
      <S.BookTitle>{title}</S.BookTitle>
      <S.BookAuthor>{author}</S.BookAuthor>
    </S.NewBookCardBox>
  );
};

export default NewBookCard;
