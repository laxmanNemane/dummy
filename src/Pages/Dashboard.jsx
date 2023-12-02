import React, { useState } from 'react'
import Chart from '../Component/Chart'
import { Box, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, Grid } from '@mui/material'
import SurvayTable from '../Component/Table';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import styled from '@emotion/styled';

const Dashboard = () => {
    const [dashbaordState, setDashboardState] = useState({
        graphSelect: "",
        toggle: false
    })



    const handleChange = (event) => {
        setDashboardState((prev) => ({
            ...prev, toggle: !dashbaordState?.toggle, graphSelect: event?.target?.value
        }))
    };
    const handleToggleChange = (event) => {
        setDashboardState((prev) => ({
            ...prev, toggle: event.target?.checked,
        }))

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

        <Grid container spacing={2} p={4}  >
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ textAlign: "center", p: 1 }}  >
                <Box border={1} >
                    <Box className="Header-ads_insights" padding={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid gray" }}>
                        <h2 >Ad Insights</h2>
                        <HelpOutlineIcon />
                    </Box>
                    <SurvayTable />
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ textAlign: "center", p: 1 }} >
                <Box border={1} >
                    <Box className="Header-ads_insights" padding={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid gray" }}>
                        <h2>Ad Insights</h2>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small-label">Age</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={dashbaordState?.graphSelect}
                                    label="Select"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>matrix</MenuItem>
                                </Select>
                            </FormControl>
                            <HelpOutlineIcon />
                        </div>
                    </Box>

                    <Chart />
                    <Box display={"flex"} justifyContent={"flex-end"} pb={1}>

                        <FormControlLabel
                            control={<Android12Switch checked={dashbaordState?.toggle}
                                onChange={handleToggleChange} />}
                        />
                    </Box>
                </Box>
            </Grid>
        </Grid>


    )
}

export default Dashboard