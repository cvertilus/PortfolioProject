import React from 'react'
import { Box, Typography, TextField, Button, IconButton, Stack, Tooltip, CircularProgress } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import emailjs from "@emailjs/browser"
import { useRef, useState } from 'react'
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useTranslation } from 'react-i18next'

export default function ContactSection() {
    const { t } = useTranslation();
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success" // success | error | info | warning
    });

    const handleSnackbarClose = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            ).then(
                () => {
                    setLoading(false);
                    setSnackbar({
                        open: true,
                        message: t("contact.success"),
                        severity: "success"
                    });
                    formRef.current.reset();
                },
                (error) => {
                    setLoading(false);
                    setSnackbar({
                        open: true,
                        message: t("contact.error"),
                        severity: "error"
                    });
                    console.error("EmailJS Error:", error);
                }
            )
    }
    return (
        <>
            <Box
                component="section"
                sx={{
                    width: "100%",
                    py: { xs: 8, md: 12 },
                    px: { xs: 2, md: 8 },
                    backgroundColor: "var(--background)",
                    color: "var(--text)",

                }}
            >
                <Box
                    sx={{
                        maxWidth: "1100px",
                        mx: "auto",
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: "3rem"
                    }}
                >
                    {/* TEXTO + ICONOS */}
                    <Box>
                        <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                            {t("contact.title")}
                        </Typography>

                        <Typography sx={{ mb: 4, color: "var(--muted)" }}>
                            {t("contact.description")}
                        </Typography>

                        {/* ICONOS DE CONTACTO */}
                        <Stack direction="row" spacing={2}>
                            <Tooltip title={t("contact.linkedin")}>
                                <IconButton
                                    component="a"
                                    href="https://www.linkedin.com/in/colby-vertilus-908422194/"
                                    target="_blank"
                                    sx={{
                                        color: "var(--Primary)",
                                        "&:hover": {
                                            transform: "translateY(-3px)",
                                            boxShadow: "0 6px 20px rgba(0,0,0,0.2)"
                                        }
                                    }}
                                >
                                    <LinkedInIcon />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={t("contact.github")}>
                                <IconButton
                                    component="a"
                                    href="https://github.com/cvertilus/"
                                    target="_blank"
                                    sx={{
                                        color: "var(--Primary)",
                                        "&:hover": {
                                            transform: "translateY(-3px)",
                                            boxShadow: "0 6px 20px rgba(0,0,0,0.2)"
                                        }
                                    }}
                                >
                                    <GitHubIcon />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={t("contact.email")}>
                                <IconButton
                                    component="a"
                                    href="mailto:vertiluscolby@gmail.com"
                                    sx={{
                                        color: "var(--Primary)",
                                        "&:hover": {
                                            transform: "translateY(-3px)",
                                            boxShadow: "0 6px 20px rgba(0,0,0,0.2)"
                                        }
                                    }}
                                >
                                    <EmailIcon />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={t("contact.phone")}>
                                <IconButton
                                    component="a"
                                    href="tel:+5491133315282"
                                    sx={{
                                        color: "var(--Primary)",
                                        "&:hover": {
                                            transform: "translateY(-3px)",
                                            boxShadow: "0 6px 20px rgba(0,0,0,0.2)"
                                        }
                                    }}
                                >
                                    <PhoneIcon />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                    </Box>

                    {/* FORMULARIO */}
                    <Box
                        component="form"
                        ref={formRef}
                        onSubmit={sendEmail}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2
                        }}
                    >
                        <TextField
                            label={t("contact.form.name")}
                            name='name'
                            sx={{
                                width: "100%",
                                color: "var(--text)",
                                border: "1px solid var(--text)",
                                backgroundColor: "var(--Surface)"
                            }}
                            required
                            variant="outlined"

                        />

                        <TextField
                            label={t("contact.form.email")}
                            type="email"
                            name="email"
                            sx={{
                                width: "100%",
                                color: "var(--text)",
                                border: "1px solid var(--text)",
                                backgroundColor: "var(--Surface)"
                            }}
                            required
                        />

                        <TextField
                            label={t("contact.form.message")}
                            name='message'
                            multiline
                            rows={4}
                            required
                            sx={{
                                width: "100%",
                                color: "var(--text)",
                                border: "1px solid var(--text)",
                                backgroundColor: "var(--Surface)"
                            }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            disabled={loading}
                            sx={{
                                mt: 2,
                                alignSelf: "flex-start",
                                backgroundColor: "var(--Primary)",
                                textTransform: "none",
                                px: 4,
                                "&:hover": {
                                    transform: "translateY(-3px)",
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.2)"
                                }

                            }}
                        >

                            {loading ? (
                                <CircularProgress size={30} sx={{ color: "var(--primary)" }} />
                            ) : (
                                t("contact.form.send")
                            )}
                        </Button>
                    </Box>
                </Box>
            </Box>


            <Box
                sx={{
                    width: "100%",
                    borderTop: "1px solid var(--Secondary)",
                    mt: 6
                }}
            />
            <Box
                sx={{
                    width: "100%",
                    py: 3,
                    textAlign: "center",
                    fontSize: "0.85rem",
                    color: "var(--muted)",
                    backgroundColor: "var(--background)"
                }}
            >
                © {new Date().getFullYear()} Vertilus Colby . {t("contact.footer")}.
            </Box>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <MuiAlert
                    onClose={handleSnackbarClose}
                    severity={snackbar.severity}
                    elevation={6}
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {snackbar.message}
                </MuiAlert>
            </Snackbar>

        </>
    )
}
