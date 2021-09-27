import List from '../List';
import Detail from '../Detail';
import { Container } from './styles';
import {ThemeProvider} from 'styled-components';
import { useStateValue } from '../../state';

function App() {
  const [state, dispatch] = useStateValue();

  return (
      <ThemeProvider theme={state.theme}>
        <Container>
          <div className="list">
            <List />
          </div>
          <Detail className="detail" />
        </Container>
      </ThemeProvider>
  );
}

export default App;
