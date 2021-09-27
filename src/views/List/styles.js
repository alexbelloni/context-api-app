import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
display: flex;
flex-direction: column;
color: ${props => theme[props.theme.mode].font};
background-color: ${props => theme[props.theme.mode].secondary};

@media (min-width: 768px){
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;  
}
`

export const Header = styled.div`
padding: 10px 0 0 0;
`;