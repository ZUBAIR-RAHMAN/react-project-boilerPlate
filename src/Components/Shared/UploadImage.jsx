import { Box, Button, FormHelperText, Grid } from "@mui/material";
import React from "react";
import cloudUpload from "../../Assets/cloudUpload.png";
import { Controller } from "react-hook-form";

const UploadImage = ({
  control,
  fieldName = "",
  required = false,
  helperText = "",
}) => {
  if (!Boolean(control)) {
    return;
  }

  return (
    <Controller
      name={fieldName}
      control={control}
      rules={{
        required: {
          value: required,
          message: `${helperText} are required`,
        },
      }}
      defaultValue={[]}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Grid container columnGap={"35px"} rowGap={"35px"}>
          {value?.map((file, index) => (
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <Box
                kay={index}
                component="img"
                src={URL.createObjectURL(file)}
                sx={{
                  height: "99px",
                  width: "109px",
                  borderRadius: "5px",
                  boxShadow: "0px 1px 4px",
                  bgcolor: "#FCFCFC",
                }}
              />
            </Grid>
          ))}
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            <Button
              component="label"
              disableRipple
              // disabled={files.length >= 5}
              sx={{
                boxShadow: "0px 1px 4px",
                bgcolor: "#FCFCFC",
                padding: "24px",
                "&:hover": {
                  bgcolor: "#FCFCFC",
                },
              }}
            >
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => onChange([...value, e.target.files[0]])}
              />

              <Box component="img" src={cloudUpload} />
            </Button>
          </Grid>
          {Boolean(error) && (
            <Grid item xs={12}>
              <FormHelperText
                sx={{
                  color: "error.main",
                }}
              >
                {error?.message}
              </FormHelperText>
            </Grid>
          )}
        </Grid>
      )}
    />
  );
};

export default UploadImage;
