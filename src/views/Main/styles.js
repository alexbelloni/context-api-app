import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
display: flex;
flex-direction: column;
color: ${props => theme[props.theme.mode].font};
background-color: ${props => theme[props.theme.mode].secondary};

& > .list {
    flex: 2;    
}

& > .detail {
    flex: 1;
}

@media (min-width: 768px){
    flex-direction: row;
    padding: 0 30px;   
    height: 100vh;
}
`