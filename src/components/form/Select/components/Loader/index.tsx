import React from 'react';
import * as S from './styles';

const Loader = () => {
    return (
        <S.Wrapper>
            <S.SvgLoader viewBox="25 25 50 50">
                <S.CircleLoader
                    className="loader-path"
                    cx="50"
                    cy="50"
                    r="20"
                    fill="none"
                    stroke="#70c542"
                    strokeWidth="2"
                />
            </S.SvgLoader>
        </S.Wrapper>
    );
};

export default Loader;
