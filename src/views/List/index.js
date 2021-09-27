import { useEffect } from 'react';
import { useStateValue } from '../../state';
import SmallCard from '../../components/SmallCard';
import { setUsers } from '../../state/actions';
import {
    Container,
    Header,
} from './styles';
import SearchBar from '../../components/SearchBar';

const Main = () => {
    const [state, dispatch] = useStateValue();
    const { users, filteredUsers } = state;

    useEffect(() => {
        //return
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(e => e.json())
            .then(e => dispatch(setUsers(e)))
    }, []);

    const list = filteredUsers || users;

    return (state.users ?
        (
            <Container>
                <Header>
                    <SearchBar />
                </Header>
                {list.map(user => (
                    <SmallCard key={user.name} user={user} />
                )
                )}
            </Container>
        ) : ''
    )
}

export default Main;
