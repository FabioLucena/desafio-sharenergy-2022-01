import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import GlobalStateContext from '../Global/GlobalStateContext';

export default function BasicSelect() {
  const [limit, setLimit] = React.useState('');
  const { states, setters, requests } = React.useContext(GlobalStateContext);

  const handleChange = (event) => {
    // setAge(event.target.value);
    setters.setData2(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 350, paddingTop: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Artigos por página</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={limit}
          label="limit"
          onChange={handleChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

