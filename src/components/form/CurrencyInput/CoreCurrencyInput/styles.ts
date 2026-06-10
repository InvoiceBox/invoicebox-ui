import CurrencyInputFromLibrary from 'react-currency-input-field';
import styled from 'styled-components';
import { getPureInputStyled } from '../../PureInput/styles';

export const StyledCurrencyInputFromLibrary = getPureInputStyled(CurrencyInputFromLibrary);

export const InputWrapper = styled.div`
    position: relative;
`;
