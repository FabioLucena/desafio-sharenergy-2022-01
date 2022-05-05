import Button from '@mui/material/Button'
import { ThemeProvider, createTheme } from '@mui/material'
import Home from './Home/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#800080',
    },
  },
});

function App() {

  

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button variant="contained"> botao </Button>
        
        

      </div>
    </ThemeProvider>
  );
}

export default App;
