import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './styled';
import { GoToHomePage } from '../../Routes/RouteFunctions';
import { useNavigate } from 'react-router-dom';
import useForm from '../CustomHooks/UseForm';
import GlobalStateContext from '../Global/GlobalStateContext';
import { Button } from '@mui/material';

export default function Header(props) {
  const [form, handleInputChange, clear] = useForm({ search: "" })
  const { states, setters, requests } = React.useContext(GlobalStateContext);

  const navigate = useNavigate()

  const sendForm = (event) =>{
    event.preventDefault();
    setters.setPostUrl2(form.search)
    setters.setData4(1)
    clear()
    
  }

  const aux = () =>{
    setters.setData4(0)
    GoToHomePage(navigate)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {props.cont !== 1 ? <HomeIcon onClick={() => aux()} /> : ""}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={()=>aux()}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: "pointer" } }}
          >
            NEWS
          </Typography>
          <Search >
          <form onSubmit={sendForm}>  
          <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              type={"text"}
              name={"search"}
              value={form.search}
              onChange={handleInputChange}
              inputProps={{ 'aria-label': 'search' }}
            />
            <Button variant="text" type={"submit"} >Send</Button>
            </form>
          </Search>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}