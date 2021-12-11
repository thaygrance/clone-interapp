import { ThemeProvider } from 'styled-components';
import Router from './routes/index';
import { theme } from './styles/theme/index';
import GlobalStyle from './styles/globalStyles'
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Router />
      </AuthProvider>
   </ThemeProvider>
  );
}

export default App;
