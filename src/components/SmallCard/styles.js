//import hexToRgba from 'hex-to-rgba';
import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  margin: 10px 0;
  cursor: pointer;
  color: ${props => theme[props.theme.mode].font};
  background-color: ${props => theme[props.theme.mode].secondary};

  &:hover{
    opacity: 0.8;
  }

  @media (min-width: 768px){
    max-width: 335px;
  }
  `;

  export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Info = styled.div`
display: flex;
flex-direction: column;
padding: 10px ;
font-size: 1em;
`;

  export const Name = styled.div`
  color: ${props => theme[props.theme.mode].font};
`;

  export const Email = styled.div`
  text-transform: lowercase;
  font-size: 0.9em;
  color: ${props => theme[props.theme.mode].font};
`;


