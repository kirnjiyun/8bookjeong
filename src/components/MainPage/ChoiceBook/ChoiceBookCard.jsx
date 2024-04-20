import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ChoiceBookCard.styled';

const ChoiceBookCard = ({ book }) => {
  const navigate = useNavigate();

  const goToBookDetailPage = (isbn) => {
    console.log(book); // 콘솔에 도서 정보 출력
    navigate(`/products/${isbn}`);
  };

  function getSubstringBeforeWord(inputString, word) {
    const index = inputString.indexOf(word);
    return index !== -1 ? inputString.substring(0, index) : inputString;
  }

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (book) {
      setTitle(getSubstringBeforeWord(book.title, ' -'));
      setAuthor(getSubstringBeforeWord(book.author, '(지은이)'));
    }
  }, [book]);

  return (
    <S.ChoiceBookCard>
      <S.ChoiceBookCardimg
        $backgroundImage={book?.cover}
        onClick={() => goToBookDetailPage(book.isbn)}></S.ChoiceBookCardimg>
      <div>
        <S.BookTitle>{title}</S.BookTitle>
        <S.BookAuthor>{author}</S.BookAuthor>
        <S.BookAuthor>{book?.publisher}</S.BookAuthor>
      </div>
    </S.ChoiceBookCard>
  );
};

export default ChoiceBookCard;
