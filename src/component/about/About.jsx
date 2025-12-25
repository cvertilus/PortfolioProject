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
                px: { xs: 2, md: 8 },
                pt:"15px"
            }}
        >
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr 1fr" },
                    gap: "2rem",
                    width: "100%"

                }}
            >
                {/* Perfil 3D */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                </Box>


                {/* Forma de trabajo */}
                <Box sx={{
                    paddingLeft: {xs:"0", md:"6rem"}
                }
                }>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        {t("about.workflowTitle")}
                    </Typography>

                    {workflow.map((step, index) => (
                        <Typography
                            key={index}
                            sx={{
                                mb: 1,
                                color: "var(--muted)",
                                "&::before": {
                                    content: `"✔"`,
                                    marginRight: "8px",
                                    color: "var(--Primary)"
                                }
                            }}
                        >
                            {step}
                        </Typography>
                    ))}
                </Box>

                {/* Pasatiempos */}
                <Box>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        {t("about.hobbiesTitle")}
                    </Typography>

                    {hobbies.map((hobby, index) => (
                        <Typography
                            key={index}
                            sx={{
                                mb: 1,
                                color: "var(--muted)",
                                "&::before": {
                                    content: `"🏆"`,
                                    marginRight: "8px",

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
