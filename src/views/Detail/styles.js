import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
display: flex;
flex-direction: column;
width: unset;
justify-content: flex-start;
align-items: center;
font-size: 2rem;

@media (min-width: 768px){
    width: 100%;
}
`