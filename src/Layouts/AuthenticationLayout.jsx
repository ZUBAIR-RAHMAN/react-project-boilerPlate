import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
// import BrandLogo from "../Assets/BrandLogo.svg";

const AuthenticationLayout = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          bgcolor: "primary.main",
          borderRadius: "4px",
          // paddingTop: "45px",
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box component="img" src={BrandLogo} />
        </Box> */}
        <Outlet />
      </Box>
    </Container>
  );
};

export default AuthenticationLayout;
