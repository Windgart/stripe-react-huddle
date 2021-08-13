import { StyleProvider } from './StyleProvider';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Layout from 'components/Layout';
import Routing from 'routing';
import { BrowserRouter } from 'react-router-dom';
import { RouteWrapper } from 'components/Styled/containers';

function App() {
  return (
    <>
      <StyleProvider />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routing />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
