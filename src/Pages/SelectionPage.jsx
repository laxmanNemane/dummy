import { Box, Button, Card, Checkbox, FormControlLabel, Grid } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const SelectionPage = () => {
    const navigate = useNavigate();
    const [selectionState, setSelectionState] = useState({
        textsAds: false,
        mediaAds: false,
    })

    const handleCheckboxChange = (event, adsType) => {


        if (adsType === "textsAds") {
            setSelectionState((prev) => ({ ...prev, textsAds: event.target.checked }))

        } else if (adsType === "mediaAds") {

            setSelectionState((prev) => ({ ...prev, mediaAds: event.target.checked }))
        }




    };

    const GoToCreateAds = () => {
        if (selectionState?.textsAds || selectionState?.mediaAds) {
            navigate("/createAds")
        }
    }


    return (
        <Box>
            <h1 style={{ fontSize: "22px", fontWeight: "500" }}>Create Ads</h1>
            <Grid container spacing={2} sx={{ pt: 8 }}>

                <Grid item xs={0} sm={0} md={3} lg={3} sx={{ textAlign: "center" }} >

                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} sx={{ textAlign: "center" }} >

                    <Card sx={{ display: "flex", flexDirection: "column", p: 2 }}>


                        <FormControlLabel
                            control={<Checkbox checked={selectionState?.textsAds} onChange={(event) => handleCheckboxChange(event, "textsAds")} />}
                            label=""
                        />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOT9rIM-DnHulOw1H3pnTBnhJ-DcxZvjy61Q&usqp=CAU" alt="" style={{ borderRadius: "6px 6px 0 0" }} />
                        <Box>
                            <h2 style={{ display: "flex", flexDirection: "column", fontSize: "18px" }}>Create <span style={{ fontSize: "15px", fontWeight: "500" }}>Text Ads</span></h2>
                        </Box>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} sx={{ textAlign: "center" }} >

                    <Card sx={{ display: "flex", flexDirection: "column", p: 2 }}>


                        <FormControlLabel
                            control={<Checkbox checked={selectionState?.mediaAds} onChange={(event) => handleCheckboxChange(event, "mediaAds")} />}
                            label=""
                        />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOT9rIM-DnHulOw1H3pnTBnhJ-DcxZvjy61Q&usqp=CAU" alt="" style={{ borderRadius: "6px 6px 0 0" }} />
                        <Box>
                            <h2 style={{ display: "flex", flexDirection: "column", fontSize: "18px" }}>Create <span style={{ fontSize: "15px", fontWeight: "500" }}>Media Ads</span></h2>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={0} sm={0} md={3} lg={3} sx={{ textAlign: "center" }} >

                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} sx={{ textAlign: "end" }} >
                    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 4, pt: 8 }}>


                        <Button type="submit" variant="contained" color="primary" onClick={() => GoToCreateAds()}>
                            Next
                        </Button>

                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}

export default SelectionPage