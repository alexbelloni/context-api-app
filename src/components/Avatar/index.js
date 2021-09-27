import React from 'react';
import {Container} from './styles';

const Avatar = ({ user, size }) => {
    return (
        <Container>
            <img src={`https://i.pravatar.cc/${size || 300}?img=${user.id}`} alt={user.name} />
        </Container>
    )
}

export default Avatar;