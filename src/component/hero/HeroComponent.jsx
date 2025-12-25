import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function HeroComponent() {
    const { t } = useTranslation();

    return (
        <>

            <Box
                sx={{
                    height: '90dvh',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'var(--background)',
                    color: 'var(--text)',
                    padding: { xs: '0 16px', md: '0 20px' },
                    textAlign: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-family)',

                    // 🔹 cambia según tamaño
                    flexDirection: {
                        xs: 'column',
                        md: 'row',
                    },

                    gap: {
                        xs: '2rem',
                        sm: '4rem',
                        md: '10rem',
                    },
                }}>
                {/* Aquí va el contenido del componente Hero */}

                <Box>
                    <h1 > {t("hero.welcome")} <span style={{
                        color: "var(--Primary)",

                    }}> {t("hero.lastName")} {t("hero.firstName")}</span></h1>
                    <p style={{
                        fontSize: '1.5rem',
                        marginTop: '1rem',
                        color: 'var(--Secondary)',
                    }}> <h1>{t("hero.title")}</h1></p>

                    <Typography
                        component="p"
                        sx={{
                            maxWidth: '500px',
                            lineHeight: 1.6,
                            color: 'var(--muted)',
                        }}
                    >
                        {t("hero.description")}
                    </Typography>


                </Box>

                <Box 
                    sx={{

                        marginTop: '2rem',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                
                >
                    <Button 
                    variant='outlined'
                    sx={{
                        marginRight: '1rem',
                        
                        padding:"10px",
                        borderRadius:"10px",
                        border: "solid 3px var(--muted)",
                        color: 'var(--text)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            backgroundColor: 'var(--muted)',
                            scale: '1.05',
                        },
                    }}
                    >
                        {t("hero.contact")}
                    </Button>
                    <Button
                    variant='outlined'
                    sx={{
                        
                        padding:"10px",
                        borderRadius:"10px",
                        border: "solid 3px var(--Primary)",
                        
                        color: 'var(--text)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            backgroundColor: 'var(--Primary)',
                            scale: '1.05',
                            
                        },
                    }}
                    
                    >
                        CV
                    </Button>
                </Box>

            </Box>


        </>
    )
}
