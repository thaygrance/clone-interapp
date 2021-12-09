import { ThemeProvider } from 'styled-components';
import Router from './routes/index';
import { theme } from './styles/theme/index';
import GlobalStyle from './styles/globalStyles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
   </ThemeProvider>
  );
}

export default App;
