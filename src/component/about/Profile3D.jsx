import { Box } from "@mui/material";

export default function Profile3D() {
    return (
        <Box
            sx={{
                perspective: "1000px",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: 280,
                    height: 280,
                    borderRadius: "50%", // Corregido a 50% para un círculo perfecto
                    // Degradado sutil para la parte superior
                    background: "radial-gradient(circle at top, rgba(56,189,248,0.2), transparent 70%)",
                    backgroundColor: "var(--background)", // Fondo base negro donde se difuminará la imagen
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                    src="/img/colby-image-profile.png"
                    alt="Profile"
                    sx={{
                        width: "90%",
                        height: "90%",
                        objectFit: "contain",
                        // ESTA ES LA CLAVE: Máscara que hace transparente la parte inferior
                        WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 95%)",
                        maskImage: "linear-gradient(to bottom, black 50%, transparent 95%)",
                        filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.6))",
                    }}
                />
            </Box>
        </Box>
    );
}
