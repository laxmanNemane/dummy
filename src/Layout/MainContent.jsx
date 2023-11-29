import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Box, Card } from '@mui/material'

const MainContent = () => {
    return (
        <div>
            <Header />
            <Box sx={{ p: 2, mt: 8 }}>
                <Card sx={{ boxShadow: 3, p: 2 }}>
                    <Outlet />
                </Card>
            </Box>
        </div>
    )
}

export default MainContent