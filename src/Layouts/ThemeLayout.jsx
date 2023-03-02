import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";

const ThemeLayout = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3D464D",
      },
      color1: {
        main: "#848488",
      },
      color2: {
        main: "#DEDDDD",
      },
      color3: {
        main: "#3B7197",
      },
      color4: {
        main: "#D9D9D9",
      },
      color5: {
        main: "#EFF1F4",
      },
      color6: {
        main: "#FCFCFC",
      },
      color7: {
        main: "#8F6A97",
      },
      color8: {
        main: "#F0F0F0",
      },
      color9: {
        main: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #3B7197",
      },
      color10: {
        main: "#928888",
      },
      color11: {
        main: "#ABA4A4",
      },
      color12: {
        main: "#5E5D72",
      },
      color13: {
        main: "#403E57",
      },
      color14: {
        main: "rgba(8, 88, 247, 0.6)",
        contrastText: "#FFFFFF",
      },
      color15: {
        main: "#0858F7CC",
      },
      color16: {
        main: "#007098",
      },
      textBlack: "#0B0B0B",
      textTan: "#928888",
      textWhite: "#FFFFFF",
      textAsh: "#3D464D",
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            //Set core body defaults
            padding: 0,
            minHeight: "100vh",
            textRendering: "optimizeSpeed",
            backgroundColor: "#F5F5F5",

            // use fonts for non-mui components
            "*": {
              fontFamily: ["Poppins", "sans-serif"].join(","),
            },

            // Box sizing rules
            "*,*::before,*::after": {
              boxSizing: "border-box",
            },
            // Set core root defaults
            "& html:focus-within": { scrollBehavior: "smooth" },

            // scrollbar
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
              background: "#e0e0e0",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              background: "#3D464D",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-track:hover, & *::-webkit-scrollbar-track:hover":
              {
                background: "#e0e0e0",
              },
            "&::-selection, & *::-selection": {
              backgroundColor: "gray",
            },

            // Remove all animations, transitions and smooth scroll for people that prefer not to see them
            ["@media (prefers-reduced-motion: reduce)"]: {
              "& html:focus-within": {
                scrollBehavior: "auto",
              },
              "*,*::before,*::after": {
                animationDuration: "0.01ms !important",
                animationIterationCount: "1 !important",
                transitionDuration: "0.01ms !important",
                scrollBehavior: "auto !important",
              },
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "72px",
            lineHeight: "62px",
            color: "#092C4C",
          },
          h2: {
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "54px",
            lineHeight: "53px",
            color: "#092C4C",
          },
          h3: {
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "40px",
            lineHeight: "44px",
            color: "#092C4C",
          },
          h4: {
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "28px",
            lineHeight: "35px",
            color: "#092C4C",
          },
          h5: {
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "26px",
            color: "#092C4C",
          },
          body2: {
            fontSize: "24px",
            lineHeight: "22px",
          },
        },
        variants: [
          {
            props: { variant: "body3" },
            style: {
              display: "block",
              fontSize: "18px",
            },
          },
          {
            props: { variant: "body4" },
            style: {
              display: "block",
              fontSize: "16px",
            },
          },
          {
            props: { variant: "body5" },
            style: {
              display: "block",
              fontSize: "12px",
            },
          },
          {
            props: { variant: "body6" },
            style: {
              display: "block",
              fontSize: "14px",
            },
          },
        ],
      },
      MuiButton: {
        defaultProps: {
          style: {
            textTransform: "unset",
            minWidth: "unset",
          },
        },
        variants: [
          {
            props: { variant: "button1" },
            style: {
              backgroundColor: "#67A13E",
              "&:hover": {
                backgroundColor: "#67A13EE6",
              },
            },
          },
          {
            props: { variant: "button2" },
            style: {
              backgroundColor: "#EA5046",
              "&:hover": {
                backgroundColor: "#EA5046E6",
              },
            },
          },
          {
            props: { variant: "button3" },
            style: {
              color: "#FFFFFF",
              backgroundColor: "#0858F7CC",
              "&:hover": {
                backgroundColor: "#0858F7B3",
              },
            },
          },
          {
            props: { variant: "button4" },
            style: {
              backgroundColor: "#8F6A97",
              "&:hover": {
                backgroundColor: "#8F6A97E6",
              },
            },
          },
          {
            props: { variant: "button5" },
            style: {
              backgroundColor: "#2ABC1E",
              "&:hover": {
                backgroundColor: "#2ABC1EE6",
              },
            },
          },
          {
            props: { variant: "button6" },
            style: {
              backgroundColor: "#D22943",
              "&:hover": {
                backgroundColor: "#D22943E6",
              },
            },
          },
        ],
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            "& .MuiTableCell-root": {
              color: "#FFFFFF",
              backgroundColor: "#3B7197",
            },
          },
        },
      },
      MuiTableBody: {
        styleOverrides: {
          root: {
            "& .MuiTableCell-root": {
              color: "#0B0B0B",
              backgroundColor: "#FCFCFC",
            },
            "&>*:nth-of-type(even)": {
              "& .MuiTableCell-root": {
                backgroundColor: "#EFF1F4",
              },
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
          },
        },
      },
      MuiToolbar: {
        defaultProps: {
          style: {
            height: "75px",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterMoment}>
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default ThemeLayout;
