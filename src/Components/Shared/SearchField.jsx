import { styled, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = ({ borderVariant }) => {
  // search
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    border: borderVariant ? `1px solid ${theme.palette.primary.main}` : "none",

    borderRadius: "10px",
    backgroundColor: borderVariant ? "#F0F0F0" : "#EFF1F4",
    "&:hover": {
      backgroundColor: borderVariant ? "#F0F0F0" : "#EFF1F4",
    },
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(7.5),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  // ----search style end-----

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchField;
