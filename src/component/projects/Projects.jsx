import React from 'react'
import { Box, Typography, Grid ,Tab,Tabs} from '@mui/material'
import ProjectCard from './ProjectCard'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export default function Projects() {
    const [tab, setTab] = useState(0);
   

    const competedProjects = [
        "api",
        "Movie",
        "ecommerce",
        "api-user",
        "portfolio",
        "dashboard",
        
        
        

    ]

    const ongoingProjects = [
        "Sistema de reservacion cine",
        "chat"
    ]
    const projects = tab === 0 ? competedProjects : ongoingProjects;

    const { t } = useTranslation()

    return (
        <>
            <Box
                sx={{
                    minHeight: "90dvh",
                    backgroundColor: "var(--background)",
                    color: "var(--text)",
                    padding: { xs: "1rem", md: "2rem" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid var(--Secondary)",
                  
                    
                  
                }}
            >
                {/* Título */}
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                    {t('projects.title')}
                </Typography>

                {/* Tabs */}
                <Tabs
                    value={tab}
                    onChange={(_, newValue) => setTab(newValue)}
                    sx={{
                        display: "flex",
                        justifyContent: "center",

                        mb: 4,
                        "& .MuiTab-root": {
                            color: "var(--muted)",
                            fontWeight: 500
                        },
                        "& .Mui-selected": {
                            color: "var(--Primary)"
                        },
                        "& .MuiTabs-indicator": {
                            backgroundColor: "var(--Primary)"
                        }
                    }}
                >
                    <Tab label= {t('projects.completed')}/>
                    <Tab label= {t('projects.inProgress')} />
                </Tabs>
           

                <Grid container spacing={4} direction="row"
                
                sx ={{

                    justifyContent: 'center',
                    alignItems: 'center'
                    
                }}>

                    {
                        projects.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <ProjectCard key={index} projectKey={project} />
                            </Grid>
                        ))
                    }


                </Grid>

            </Box>
            
        </>
    )


}
