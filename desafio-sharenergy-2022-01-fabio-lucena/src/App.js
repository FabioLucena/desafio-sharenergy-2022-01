import Button from '@mui/material/Button'
import { ThemeProvider, createTheme } from '@mui/material'
import { createGlobalStyle } from 'styled-components';
import Home from './Pages/Home/Home';
import Router from './Routes/Router';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

 
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#800080',
    },
  },
});

function App() {



  return (


    <div className="App">
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>

    </div>

  );
}

export default App;
