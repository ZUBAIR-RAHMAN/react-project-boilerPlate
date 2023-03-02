import React, { useMemo, useRef } from "react";
import JoditEditor, { Jodit } from "jodit-react";
import { Box, Typography } from "@mui/material";

const TextEditor = ({ setValue }) => {
  const editor = useRef(null);
  const config = {
    buttons: ["align", "bold", "italic", "underline"],
    placeholder: "",
  };

  return (
    <Box
      sx={{
        "& .jodit-status-bar .jodit-status-bar__item a ": {
          display: "none",
        },
        "& .jodit-container:not(.jodit_inline)": {
          borderColor: "primary.main",
        },
        "& .jodit-add-new-line span": {
          display: "none",
        },
        mt: "30px",
      }}
    >
      <Typography variant="body4" color="textBlack" sx={{ mb: "10px" }}>
        Discription
      </Typography>
      <JoditEditor
        ref={editor}
        onBlur={(newContent) => setValue(newContent)}
        config={config}
      />
    </Box>
  );
};

export default TextEditor;
