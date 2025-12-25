import React from 'react'
import Profile3D from './Profile3D'
import { useTranslation } from 'react-i18next'
import { Box, Typography, Stack, Chip, } from '@mui/material'

export default function About() {
    const { t } = useTranslation();

    const workflow = t("about.workflow", { returnObjects: true });
    const hobbies = t("about.hobbies", { returnObjects: true });

    return (
        <Box
            sx={{
                minHeight: "90dvh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--background)",
                color: "var(--text)",
                px: { xs: 2, md: 4, lg: 8 },
                py: 4
            }}
        >
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr ", lg: "1.5fr 1fr 1fr" },
                    gap: { xs: "2rem", lg: "4rem" },
                    maxWidth: "1400px",
                    width: "100%",
                    maring: "0 auto",

                }}
            >
                {/* Perfil 3D */}
                <Box sx={{ display: "flex", alignItems:"center",justifyContent: "center",gridArea:"1/1/3/2" }}>
                    <Profile3D />
                </Box>

                {/* Texto principal */}
                <Box>
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                        {t("about.title")}
                    </Typography>

                    <Typography sx={{ color: "var(--muted)", mb: 2 }}>
                        {t("about.intro1")}
                    </Typography>

                    <Typography sx={{ color: "var(--muted)" }}>
                        {t("about.intro2")}
                    </Typography>
                </Box>
               




                {/* Tecnologías */}
                <Box>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        {t("about.stackTitle")}
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={1}>
                        {[
                            "React",
                            "Angular",
                            "Spring Boot",
                            "Material UI",
                            "Docker",
                            "PostgreSQL",
                            "Keycloak",
                            "Git",
                            "Java",
                            "RabbitMQ"
                        ].map((tech) => (
                            <Chip
                                key={tech}
                                label={tech}
                                sx={{
                                    backgroundColor: "var(--Surface)",
                                    color: "var(--text)",
                                    border: "1px solid var(--border)"
                                }}
                            />
                        ))}
                    </Stack>

                    {/* Forma de trabajo */}
                    
                </Box>

           
                <Box sx={{ flex: 1 }}> {/* flex: 1 hace que ocupen el mismo ancho */}
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                            {t("about.workflowTitle")}
                        </Typography>

                        {workflow.map((step, index) => (
                            <Typography
                                key={index}
                                sx={{
                                    mb: 1.5,
                                    color: "var(--muted)",
                                    display: "flex", // Mejora la alineación del icono con el texto
                                    alignItems: "center",
                                    "&::before": {
                                        content: `"✔"`,
                                        marginRight: "12px",
                                        color: "var(--Primary)",
                                        fontWeight: "bold"
                                    }
                                }}
                            >
                                {step}
                            </Typography>
                        ))}
                    </Box>
                    {/* Pasatiempos */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                            {t("about.hobbiesTitle")}
                        </Typography>

                        {hobbies.map((hobby, index) => (
                            <Typography
                                key={index}
                                sx={{
                                    mb: 1.5,
                                    color: "var(--muted)",
                                    display: "flex",
                                    alignItems: "center",
                                    "&::before": {
                                        content: `"🏆"`,
                                        marginRight: "12px",
                                    }
                                }}
                            >
                                {hobby}
                            </Typography>
                        ))}
                    </Box>


            </Box>
        </Box>
    );
}
