import React from 'react'
import Chart from '../Component/Chart'
import { Box, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, } from '@mui/material'
import SurvayTable from '../Component/Table';
import styled from '@emotion/styled';

const Dashboard = () => {
    const [age, setAge] = React.useState('');
    const [checked, setChecked] = React.useState(true);


    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleToggleChange = (event) => {
        setChecked(event.target.checked);
    };

    const Android12Switch = styled(Switch)(({ theme }) => ({
        padding: 8,
        '& .MuiSwitch-track': {
            borderRadius: 22 / 2,
            '&:before, &:after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 16,
                height: 16,
            },
            '&:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                    theme.palette.getContrastText(theme.palette.primary.main),
                )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
                left: 12,
            },
            '&:after': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                    theme.palette.getContrastText(theme.palette.primary.main),
                )}" d="M19,13H5V11H19V13Z" /></svg>')`,
                right: 12,
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: 'none',
            width: 16,
            height: 16,
            margin: 2,
        },
    }));
    return (

        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} >
            <Box border={1} borderRadius={1} borderColor="black" flex={1} margin={{ xs: 0, md: 1 }}>
                <Box className="Header-ads_insights" padding={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid gray" }}>
                    <h2 >Ad Insights</h2>

                </Box>
                <SurvayTable />
            </Box>
            <Box border={1} borderRadius={1} borderColor="black" flex={1} margin={{ xs: 1, md: 0 }}>
                <Box className="Header-ads_insights" padding={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid gray" }}>
                    <h2>Ad Insights</h2>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Age</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Chart />
                <Box display={"flex"} justifyContent={"flex-end"}>

                    <FormControlLabel
                        control={<Android12Switch checked={checked}
                            onChange={handleToggleChange} />}
                    />
                </Box>
            </Box>
        </Box>

    )
}

export default Dashboard