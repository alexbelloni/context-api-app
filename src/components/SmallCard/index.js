import React from 'react';
import { useStateValue } from '../../state';
import {
  Container,
  Header,
  Name,
  Email,
  Info,
} from './styles';
import Avatar from '../Avatar';
import { setSelectedUser } from '../../state/actions';

const SmallCard = ({ user }) => {

  const [state, dispatch] = useStateValue();

  return (
    <Container className="smallcard" onClick={() => dispatch(setSelectedUser(user.id))}>
      <Header>
        <Avatar user={user} size={100} />
        <Info>
          <Name>{user.name}</Name>
          <Email>{user.email}</Email>
          {/* <div>
            <a href="#"><i class="fa fa-dribbble"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </div> */}
        </Info>
      </Header>
    </Container>
  )
};

export default SmallCard;
