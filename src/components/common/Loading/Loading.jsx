import React from 'react';
import * as S from './loading.styled';

const Loading = () => {
  return (
    <S.IsLoading>
      <svg viewBox='0 0 50 50'>
        <circle cx='25' cy='25' r='20' fill='none' strokeWidth='5'></circle>
      </svg>
    </S.IsLoading>
  );
};

export default Loading;
