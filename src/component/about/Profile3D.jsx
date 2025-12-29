import { Box } from "@mui/material";

export default function Profile3D() {
    return (
        <Box
            sx={{
                perspective: "1200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { xs: 280, md: 380 },
                width: { xs: 280, md: 380 },
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 4,
                    overflow: "hidden",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s ease",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
                    "&:hover": {
                        transform: "rotateY(12deg) rotateX(8deg)",
                    },
                }}
            >
                <Box
                    component="img"
                    src="/img/profile2.png"
                    alt="Profile"
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        transform: "translateZ(30px)",
                    }}
                />
            </Box>
        </Box>


    );
}
