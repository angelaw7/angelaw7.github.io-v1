import React from 'react'
import { Box, Card, CardContent, Typography, CardMedia, Link, Grid } from "@mui/material"
import { logoGithub } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const ProjectCard = ({ title, img, desc, website, repo }) => {

    return (
        <Grid item xs={4}>
            <Card sx={{ margin: "10px" }}>
                <Box sx={{ backgroundColor: '#ce5076', height: 'auto' }}>
                    <Typography variant="h4" sx={{ fontSize: '120%', fontWeight: 'bold', padding: '20px', textAlign: 'center', color: 'white', margin: 'auto' }}>
                        {title}
                    </Typography>
                </Box>
                <CardContent sx={{ padding: "30px", alignContent: "center" }}>
                    <CardMedia
                        component="img"
                        sx={{ maxWidth: 200, maxHeight: 100, width: 'auto', height: 'auto', margin: 'auto' }}
                        image={img}
                    />

                    <Typography variant="body2">
                        {desc}
                    </Typography>
                    <Box sx={{ display: 'flex', width: '70%', margin: 'auto', marginTop: '20px', }}>
                        <IonIcon icon={logoGithub} size="large" />
                        <Typography variant="body2" sx={{ margin: 'auto' }}>
                            <Link href={repo} underline="none" target="_blank" rel="noreferrer">
                                GitHub Repo
                            </Link>
                        </Typography>
                    </Box>
                    {/* {website ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <Typography variant="body2" sx={{ margin: 'auto' }}>
                            <Link href={website} underline="none" target="_blank" rel="noreferrer">
                                Visit the page!
                            </Link>
                        </Typography>
                    </Box>
                ) : ''} */}
                </CardContent>
            </Card >
        </Grid>
    )
}

export default ProjectCard
