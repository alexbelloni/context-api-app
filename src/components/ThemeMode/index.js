import { useEffect } from 'react';
import { useStateValue } from '../../state';
import { setTheme } from '../../state/actions';
import { Container } from './styles';

const Main = () => {
    const [state, dispatch] = useStateValue();
    const isLightMode = state.theme.mode === 'light';

    const toggleTheme = e=>{
        dispatch(setTheme(isLightMode ? 'dark' : 'light'))
    }

    return(
        <Container>
        <button onClick={toggleTheme}>{isLightMode ? <i className="fa fa-moon-o"></i>: 
        <i className="fa fa-sun-o"></i>}</button>
        </Container>
    )
}

export default Main;