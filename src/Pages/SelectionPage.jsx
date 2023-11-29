import { Box, Card, Grid } from '@mui/material'
import React from 'react'

const SelectionPage = () => {
    return (
        <Box>
            <Grid container spacing={2} sx={{ p: 8 }}>
                <Grid item xs={0} sm={0} md={2} lg={2} sx={{ textAlign: "center" }} >

                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} sx={{ textAlign: "center" }} >
                    <Box >

                        <Card>
                            mobileUi
                            <Box>
                                <h2>Create <span>Text Ads</span></h2>
                            </Box>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} sx={{ textAlign: "center" }} >
                    <Box>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, rerum esse, in nobis aut et quod neque qui ipsum reprehenderit architecto. Sequi, et.</p>
                    </Box>
                </Grid>
                <Grid item xs={0} sm={0} md={2} lg={2} sx={{ textAlign: "center" }} >

                </Grid>

            </Grid>
        </Box>
    )
}

export default SelectionPage