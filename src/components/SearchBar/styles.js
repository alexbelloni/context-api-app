import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
color: ${props => theme[props.theme.mode].font};
background-color: ${props => theme[props.theme.mode].secondary};
border: none;

& .text {
    border: 1px solid ${props => theme[props.theme.mode].border};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 3px;
    padding: 3px;
    margin: 0 10px 0 0;
}

& .text i {
    padding: 0 5px;
}

& .text input {
    margin: 5px;
    padding: 5px;
    width: 100%;
    border: none;
    background-color: ${props => theme[props.theme.mode].secondary};
    color: ${props => theme[props.theme.mode].font};
}
`
