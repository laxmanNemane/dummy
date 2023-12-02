import { Box, Button, Grid, IconButton, MenuItem, Modal, Select, Stack, TextField, Typography } from '@mui/material';
import React from 'react'
import { useFormik } from "formik"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const Modalstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 3,
};

const FormPage = () => {

    const [isSubmittingOpen, setIsSubmittingOpen] = React.useState(false);


    const formik = useFormik({
        initialValues: {
            heading01: '',
            heading02: '',
            businessName: '',
            websiteUrl: '',
            description01: '',
            buttonLabel: '',
        },
        onSubmit: (values) => {
            console.log(
                values, "values"
            );
            handleOpen()
        },
    });

    const buttonLabelOptions = ['Option 1', 'Option 2', 'Option 3']; // Add your options here

    const handleOpen = () => {
        // open submitting page
        setIsSubmittingOpen(true)
        // close after 0.6 sec
        setTimeout(() => {
            handleClose()
        }, 600);
    };

    // close modal
    const handleClose = () => setIsSubmittingOpen(false);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>

                        <Typography variant="p" gutterBottom sx={{ fontWeight: 600 }}>
                            Heading 02
                        </Typography>
                        <TextField
                            fullWidth
                            id="heading01"
                            name="heading01"
                            label="Add a heading that would make users intrested"
                            value={formik.values.heading01}
                            onChange={formik.handleChange}
                            variant="outlined"
                            margin="normal"
                        />

                        <Typography variant="p" gutterBottom sx={{ fontWeight: 600 }} >
                            Heading 02
                        </Typography>
                        <TextField
                            fullWidth
                            id="heading02"
                            name="heading02"
                            label="Add a heading that would make users intrested"
                            value={formik.values.heading02}
                            onChange={formik.handleChange}
                            variant="outlined"
                            margin="normal"
                        />
                        <Typography variant="p" gutterBottom sx={{ fontWeight: 600 }}>
                            Bussiness Name
                        </Typography>
                        <TextField
                            fullWidth
                            id="businessName"
                            name="businessName"
                            label="Add your bussiness name"
                            value={formik.values.businessName}
                            onChange={formik.handleChange}
                            variant="outlined"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>

                        <Typography variant="p" gutterBottom sx={{ fontWeight: 600 }}>
                            Description 01
                        </Typography>

                        <TextField
                            fullWidth
                            multiline
                            rows={6}
                            id="description01"
                            name="description01"
                            label="Add primary text to help undarstand more about your products services of offers"
                            value={formik.values.description01}
                            onChange={formik.handleChange}
                            variant="outlined"
                            margin="normal"
                        />


                        <Typography variant="p" gutterBottom sx={{ fontWeight: 600 }}>
                            Button Label
                        </Typography>
                        <Select
                            labelId="buttonLabel"
                            id="buttonLabel"
                            name="buttonLabel"
                            value={formik.values.buttonLabel}
                            onChange={formik.handleChange}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        >
                            {buttonLabelOptions.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Typography variant="p" gutterBottom sx={{ fontWeight: 600 }}>
                            Website URL
                        </Typography>
                        <TextField
                            fullWidth
                            id="websiteUrl"
                            name="websiteUrl"
                            label="Add the URL of the landing page you want to redirect users to"
                            value={formik.values.websiteUrl}
                            onChange={formik.handleChange}
                            variant="outlined"
                            margin="normal"
                        /></Grid>
                </Grid>






                <Stack direction={"row"} sx={{ pt: 12, pb: 2 }} gap={3} display={"flex"} justifyContent={"flex-end"}>
                    <Button type="submit" variant="outlined" color="info">
                        Submit
                    </Button>

                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Stack>
            </form>



            <Modal
                open={isSubmittingOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={Modalstyle}>
                    <Box sx={{ width: '100%' }} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={"column"}>

                        <IconButton >
                            <CheckCircleIcon color="primary" />
                        </IconButton>
                        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                            Submitted
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </div >
    )
}

export default FormPage