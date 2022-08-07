import React from 'react'
import { Box, Card, CardContent, Typography, CardMedia, Grid } from "@mui/material"

const ExperienceCard = ({ company, date, position, img, desc }) => {

    return (
        <Card sx={{ display: 'flex', margin: '10px' }}>
            <CardContent style={{ padding: "30px" }}>
                <Grid container columns={{ xs: 4, sm: 8, md: 12 }} alignItems="center">
                    <Grid item xs={4} sm={2} md={2}>
                        <CardMedia
                            component="img"
                            sx={{ maxWidth: 110, maxHeight: 110, width: 'auto', height: 'auto' }}
                            image={img}
                        />
                    </Grid>
                    <Grid item xs={4} sm={6} md={10}>
                        <Typography variant="body1" sx={{ fontSize: '120%' }}>
                            <Box fontWeight={"bold"} display={"inline"}>{position}</Box> - {company}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            {date}
                        </Typography>
                        <Typography variant="body2">
                            {desc}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>

        </Card >
    )
}

export default ExperienceCard
