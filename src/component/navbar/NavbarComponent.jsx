import { AppBar, useMediaQuery, Toolbar, Typography, Button, Box, Drawer, ToggleButtonGroup, ToggleButton} from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';



export default function NavbarComponent() {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = React.useState(false)
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [scrolled, setScrolled] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    }

    const menuItems = [
        { text: t("navbar.home"), path: "/" },
        { text: t("navbar.projects"), path: "/projects" },
        { text: t("navbar.about"), path: "/about" },
        { text: t("navbar.contact"), path: "/contact" },

    ];

    const handleChange = (event, newLang) => {
        if (newLang !== null) {
            i18n.changeLanguage(newLang);
        }
    };

    const DrawerMenu = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            {menuItems.map((item, index) => (
                <Typography
                    variant="h6"
                    component={Link}
                    to={item.path}
                    sx={{

                        position: 'relative',
                        display: 'block',
                        margin: "10px",
                        paddingTop: "25px",
                        cursor: 'pointer',
                        color: 'var(--text)',
                        textDecoration: 'none',
                        
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            bottom: -4,
                            width: '0%',
                            height: '2px',
                            backgroundColor: 'var(--Primary)',
                            transition: 'width 0.3s ease',
                        },
                        '&:hover::after': {
                            width: '100%',
                        },
                        '&:hover': {
                            color: 'var(--link-hover)',
                        },
                    }}
                >
                    {item.text}
                </Typography>
            ))}
        </Box>
    );

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>


            <Box sx={{
                minWidth: "100vw",
                overflowX: "hidden",
                marginBottom: "40px",

                flexGrow: 1,
                top: 0,
                position: "sticky",
                zIndex: 1000,
                backgroundColor: "var(--background)"

            }}>
                <AppBar sx={{
                    backgroundColor: "inherit",
                    borderBottom: scrolled ? "1px solid var(--Secondary)" : "none",


                }}


                >
                    <Toolbar >


                        {isMobile ? (
                            <>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        minWidth: '100%',

                                    }}

                                >
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{
                                            ml: 0,
                                            flexGrow: -1
                                        }}
                                        onClick={toggleDrawer(true)}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Box >

                                        <ToggleButtonGroup
                                            value={i18n.language}
                                            exclusive
                                            onChange={handleChange}
                                            aria-label="Language selection"
                                            sx={{
                                                height: "20px",
                                                fontFamily: "var(--font-family)",
                                            }}
                                        >
                                            <ToggleButton value="es" sx={{ borderRadius: "35px", borderColor: "var(--primary)" }}>ES</ToggleButton>
                                            <ToggleButton value="en" sx={{ borderRadius: "35px", borderColor: "var(--primary)" }}>EN</ToggleButton>
                                        </ToggleButtonGroup>
                                    </Box>
                                </Box>


                                <Drawer open={open} onClose={toggleDrawer(false)}>
                                    {DrawerMenu}
                                </Drawer>

                            </>
                        ) : (
                            <>
                                <Box sx={{
                                    flexGrow: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: 3

                                }} >
                                    {menuItems.map((item, index) => (
                                        <Typography
                                            variant="h6"
                                            component={Link}
                                            to={item.path}
                                            sx={{
                                                fontFamily: "var(--font-family)",
                                                position: 'relative',
                                                margin: '0 10px',
                                                cursor: 'pointer',
                                                color: 'var(--text)',
                                                textDecoration: 'none',
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    left: 0,
                                                    bottom: -4,
                                                    width: '0%',
                                                    height: '2px',
                                                    backgroundColor: 'var(--Primary)',
                                                    transition: 'width 0.3s ease',
                                                },
                                                '&:hover::after': {
                                                    width: '100%',
                                                },
                                                '&:hover': {
                                                    color: 'var(--link-hover)',
                                                },
                                            }}
                                        >
                                            {item.text}
                                        </Typography>
                                    ))}
                                </Box>

                                <Box >

                                    <ToggleButtonGroup
                                        value={i18n.language}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label="Language selection"
                                        sx={{
                                            height: "20px",
                                            fontFamily: "var(--font-family)",
                                        }}

                                    >
                                        <ToggleButton value="es" sx={{ borderRadius: "25px", borderColor: "var(--primary)", fontFamily: "var(--font-family)" }}>ES </ToggleButton>
                                        <ToggleButton value="en" sx={{ borderRadius: "25px", borderColor: "var(--primary)", fontFamily: "var(--font-family)" }}>EN</ToggleButton>
                                    </ToggleButtonGroup>
                                </Box>


                            </>
                        )}

                    </Toolbar>
                </AppBar>
            </Box >





        </>
    )
}
