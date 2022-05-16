import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import GlobalStateContext from '../Global/GlobalStateContext';

export default function PaginationControlled() {
    const [page, setPage] = React.useState(1);
    const { states, setters, requests } = React.useContext(GlobalStateContext);

    const handleChange = (event, value) => {
        setPage(value);
        if (value === 1) {
            setters.setData3(0)
        } else {
            setters.setData3(value)
            console.log(states.data3)
        }
    };

    return (
        <Stack spacing={2} sx={{ paddingTop: 3, alignItems: 'center' }}>
            <Typography>Page: {page}</Typography>
            <Pagination count={10}  page={page} onChange={handleChange}/>
        </Stack>
    );
}