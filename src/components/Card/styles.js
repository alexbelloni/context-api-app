//import hexToRgba from 'hex-to-rgba';
import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  margin: 10px;
  `;

  export const Name = styled.div`
  color: black;
  font-size: 1.6em;
`;

  export const Email = styled.div`
  color: grey;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px ;
  justify-content: space-between;
  border-bottom: 1px solid #eaedee;

  & > img {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px ;
  justify-content: space-between;
  border-bottom: 1px solid #eaedee;
`;

// background-color: ${props =>
//   props.color === 'RED'
//     ? hexToRgba(theme.colors.red, 0.1)
//     : props.color === 'YELLOW'
//     ? hexToRgba(theme.colors.yellow, 0.1)
//     : hexToRgba(theme.colors.green, 0.1)};

export const PeopleConfirmed = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-top: 10px;
  align-items: flex-start;
  padding: 5px 10px 5px 15px;
  background-color: 'red';
  border-radius: 0px 50px 50px 0px;
  > span {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: ${props =>
      props.color === 'RED'
        ? theme.colors.red
        : props.color === 'YELLOW'
        ? theme.colors.yellow
        : theme.colors.green};
  }
`;

export const Address = styled.div`
  flex: 1;

  padding-top: 15px;
  padding-left: 15px;
  > span {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: #505861;
  }
`;

export const AddressStatus = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const ShareArea = styled.div`
  position: absolute;
  right:0;
  text-align: right;
  background-color: rgb(37, 211, 102);
  width: 40px;
  border-radius: 25px 0 0 25px;
`





export const PostoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DataGroup = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  > strong {
    margin-left: 5px;
  }

  > span {
    margin-left: 5px;
    font-family: Lato;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const DetailsBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-top: 1px solid #eaedee;
  padding-top: 25px;
  > span {
    color: #505861;
  }
`;

export const ChartColumn = styled.div`
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > span {
    margin-left: 5px;
    font-weight: 700;
    font-size: 14px;
    color: #262d32;
  }
`;

export const DetailsContainer = styled.div`
  padding: 10px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #eaedee;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 5px;
  padding-top: 10px;
`;

export const VacinesInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-items: flex-end;
  justify-content: flex-end;
  > span {
    font-family: Lato;
    color: #505861;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 17px;
    margin-right: 15px;
  }
`;

export const Badge = styled.div`
  background-color: ${props => props.color};
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-radius: 25px 0 0 25px;
`;
