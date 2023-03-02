import { LoadingButton } from "@mui/lab";
import { Box, InputLabel, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../../Global/GlobalContext";
import { axiosRaw } from "../../Utils/axiosApi";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const { localeString } = useGlobalContext();
  const [searchParams] = useSearchParams();
  const { control, handleSubmit, reset, watch } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const uidb64 = searchParams.get("uidb64");
  const token = searchParams.get("token");

  const { mutate: passwordResetMutation, isLoading } = useMutation(
    ({ password }) =>
      axiosRaw.patch("/account/password-reset-complete", {
        password,
        token,
        uidb64,
      }),
    {
      onSuccess: () => {
        enqueueSnackbar("Password updated succesfully", { variant: "info" });
        navigate("/auth");
      },
      onError: ({ response: { data = {} } = {} }) => {
        enqueueSnackbar("Failed to reset password", { variant: "error" });
        reset();

        Object.entries(data)?.forEach((value) => {
          setError(value[0], {
            message: value[1][0],
          });
        });
      },
    }
  );

  const inputFields = [
    {
      name: "password",
      type: "password",
      label: localeString.password,
      defaultValue: "",
      placeholder: localeString.passwordPlaceholder,
      rules: {
        required: {
          value: true,
          message: localeString.passwordRequired,
        },
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          message: localeString.passwordValidationError,
        },
      },
    },
    {
      name: "password2",
      type: "password",
      label: localeString.confirmPassword,
      defaultValue: "",
      placeholder: localeString.confirmPasswordPlaceholder,
      rules: {
        required: {
          value: true,
          message: localeString.confirmPasswordRequired,
        },
        validate: (val) => {
          if (watch("password") !== val) {
            return localeString.confirmPasswordMismatch;
          }
        },
      },
    },
  ];

  return (
    <Box component="form" onSubmit={handleSubmit(passwordResetMutation)}>
      <Typography variant="h4" color="textWhite">
        {localeString.updatePassword}
      </Typography>
      <Typography variant="body1" color="textWhite" paddingTop="10px">
        {localeString.continueToNotunAsha}
      </Typography>

      {inputFields.map(
        ({
          name,
          label,
          type,
          defaultValue,
          placeholder,
          rules,
          required = true,
        }) => {
          return (
            <Controller
              name={name}
              control={control}
              rules={rules}
              defaultValue={defaultValue}
              render={({ field, fieldState: { error } }) => (
                <Box sx={{ my: "20px" }}>
                  <InputLabel
                    htmlFor={`${name}-input`}
                    error={Boolean(error)}
                    required={required}
                    sx={{
                      color: "textWhite",
                      fontSize: "16px",
                      marginBottom: "10px",
                    }}
                  >
                    {label}
                  </InputLabel>
                  <TextField
                    variant="outlined"
                    size="small"
                    id={`${name}-input`}
                    type={type}
                    placeholder={placeholder}
                    sx={{
                      width: 1,
                      height: "37px",
                      bgcolor: "textWhite",
                      border: "1px solid black",
                      borderRadius: "5px",

                      "& input": {
                        py: "6.5px !important",
                      },
                    }}
                    error={Boolean(error)}
                    helperText={Boolean(error) && error?.message}
                    {...field}
                  />
                </Box>
              )}
            />
          );
        }
      )}

      <LoadingButton
        loading={isLoading}
        variant="contained"
        type="submit"
        sx={{
          width: 1,
          height: "40px",
          mt: "40px",
          bgcolor: "grey3.main",
          color: "black2.main",
          textTransform: "unset",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "22px",

          "&:hover": { bgcolor: "grey3.main" },
        }}
      >
        {localeString.register}
      </LoadingButton>
    </Box>
  );
};

export default UpdatePassword;
