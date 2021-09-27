import { useEffect } from 'react';
import { useStateValue } from '../../state';
import { setUsers } from '../../state/actions';
import { Container } from './styles';
import ThemeMode from '../../components/ThemeMode';

const Main = () => {
    const [state, dispatch] = useStateValue();
    const { users, selectedUser } = state;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(e => e.json())
            .then(e => dispatch(setUsers(e)))
    }, [])

    return (
        <Container>
            <ThemeMode />
            {!selectedUser ? (
                <p>Details here</p>
            ) : (
                <p>{users.find(u=>u.id === selectedUser).name}</p>
            )}
        </Container>
    )
}

export default Main;
