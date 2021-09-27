import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  & button {
    color: ${props => theme[props.theme.mode].font};
    background: ${props => theme[props.theme.mode].primary};
    padding: 10px 20px;
    cursor: pointer;
    font-size: 2rem;
    border: 0;
    border-radius: 5px;
  }
  `