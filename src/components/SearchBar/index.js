import React, {useState} from 'react';
import { useStateValue } from '../../state';
import {
    Container,
} from './styles';
import {setSearchWord} from '../../state/actions';

const SearchBar = () => {
    const [state, dispatch] = useStateValue();
    const [word, setWord] = useState();

    const change = e=>{
        e.preventDefault();
        const w = e.target.value;
        setWord(w);
        dispatch(setSearchWord(w));
    }

    return (
        <Container>
            <div className="text">
                <i className="fa fa-search"></i>
                <input type="text" value={word} onChange={change} />
            </div>
        </Container>
    )
};

export default SearchBar;