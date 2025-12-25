import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, Typography, Chip, Stack, Box, CardMedia } from '@mui/material'
import { IconButton, Tooltip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'

export default function ProjectCard({ projectKey }) {
    const { t } = useTranslation()
    const status = t(`projects.list.${projectKey}.status`)
    const github = t(`projects.list.${projectKey}.github`, { defaultValue: null });
    const demo = t(`projects.list.${projectKey}.demo`, { defaultValue: null });
    const image = t(`projects.list.${projectKey}.image`, { defaultValue: null });
    return (
        <>
            <Card
                sx={{
                    backgroundColor: "var(--Surface)",
                    maxWidth: "350px",
                    width: "300px",

                    ...(image ? {
                        maxHeight: "400px",
                        minHeight: "380px"
                    } : { minHeight: "300px", maxHeight: "300px" }),



                    color: "var(--text)",
                    borderRadius: 3,
                    border: "1px solid var(--border)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: "var(--Primary)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
                    }
                }}
            >
                {image && (
                    <CardMedia>
                        <img
                            src={image}
                            alt={t(`projects.list.${projectKey}.name`)}
                            style={{
                                width: "100%",
                                height: "120px",
                                objectFit: "cover",
                                borderTopLeftRadius: "8px",
                                borderTopRightRadius: "8px"
                            }}
                        />
                    </CardMedia>

                )}

                <CardContent>



                    {/* Título */}
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                    >
                        {t(`projects.list.${projectKey}.name`)}
                    </Typography>

                    {/* Descripción */}
                    <Typography
                        variant="body2"
                        sx={{ color: "var(--muted)", mb: 1 }}
                    >
                        {t(`projects.list.${projectKey}.description`)}
                    </Typography>

                    {/* Tecnologías */}
                    <Typography
                        variant="caption"
                        sx={{ display: "block", mb: 1 }}
                    >
                        🛠 {t(`projects.list.${projectKey}.tech`)}
                    </Typography>

                    {/* Links */}
                    <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                        {github && (
                            <Tooltip title="Github">
                                <IconButton
                                    component="a"
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ color: "var(--Primary)" }}
                                >
                                    <GitHubIcon />
                                </IconButton>
                            </Tooltip>
                        )}

                        {demo && (
                            <Tooltip title="Site">
                                <IconButton
                                    component="a"
                                    href={demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ color: "var(--Secondary)" }}
                                >
                                    <LaunchIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                    </Box>

                    {/* Status */}
                    <Box>
                        <Chip
                            label={status}
                            size="small"
                            sx={{
                                backgroundColor:
                                    status === "In Progress" || status === "En progreso"
                                        ? "rgba(56,189,248,0.15)"
                                        : "rgba(34,197,94,0.15)",
                                color:
                                    status === "En progreso" || status === "In Progress"
                                        ? "var(--Primary)"
                                        : "var(--Secondary)",
                                fontWeight: 500
                            }}
                        />
                    </Box>
                </CardContent>
            </Card>

        </>
    )
}
