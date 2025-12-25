import { Box } from "@mui/material";

export default function Profile3D() {
  return (
    <Box
      sx={{
        perspective: "1000px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Box
        sx={{
          width: 280,
          height: 280,
          borderRadius: "20%",
          background:
            "radial-gradient(circle at top left, rgba(56,189,248,0.35), transparent 60%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.4s ease",
          boxShadow: `
            0 20px 40px rgba(0,0,0,0.5),
            inset 0 0 30px rgba(56,189,248,0.15)
          `,
          "&:hover": {
            transform: "rotateY(10deg) rotateX(6deg) scale(1.05)"
          }
        }}
      >
        <Box
          component="img"
          src="public/img/colby-image-profile.png"
          alt="Profile"
          sx={{
            width: "85%",
            height: "85%",
            objectFit: "contain",
            filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.6))"
          }}
        />
      </Box>
    </Box>
  );
}
