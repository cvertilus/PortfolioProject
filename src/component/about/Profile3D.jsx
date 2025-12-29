import { Box } from "@mui/material";

export default function Profile3D() {
    return (
        <Box
            sx={{
                perspective: "1000px",
                display: "flex",
                justifyContent: "center",
                height: { xs: "300px", md: "400px" },
                width: { xs: "300px", md: "400px" },
            }}
        >
            <Box
                sx={{
                 
                    borderRadius: "10%", // Corregido a 50% para un círculo perfecto
                    // Degradado sutil para la parte superior
                    background: "radial-gradient(circle at top, rgba(56,189,248,0.2), transparent 70%)",
                    backgroundColor: "transparent", 
                    
                    transition: "all 0.4s ease",
                    position: "relative",
                    overflow: "hidden", // Importante para que la imagen no sobresalga
                    boxShadow: `
        0 20px 40px rgba(0,0,0,0.8),
        inset 0 0 30px rgba(56,189,248,0.1)
      `,
                    "&:hover": {
                        transform: "rotateY(10deg) rotateX(6deg) scale(1.05)",
                    },
                }}
            >
                <Box
                    component="img"
                    src="/img/profile2.png"
                    alt="Profile"
                    
                    sx={{
                        width: "auto%",
                        height: "100%",
                        objectFit: "cover",
                        // ESTA ES LA CLAVE: Máscara que hace transparente la parte inferior
                        WebkitMaskImage: "linear-gradient(to right, black 90%, transparent 95%)",
                        maskImage: "linear-gradient(to Left, black 90%, transparent 95%)",
                        filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.6))",
                    }}
                />
            </Box>
        </Box>
    );
}
