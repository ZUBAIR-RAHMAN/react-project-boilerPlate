import { Paper } from "@mui/material";
import React from "react";
import PasswordAndSecurity from "../Components/Setting/PasswordAndSecurity";

const Settings = () => {
  return (
    <Paper sx={{ padding: "45px" }}>
      <PasswordAndSecurity />
    </Paper>
  );
};

export default Settings;
