import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import "./LoginPage.css";
import Stack from "@mui/material/Stack";
import { Container, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Box>
        <form className="form" onSubmit={handleSubmit}>
          <Paper elevation={3}>
            <Stack spacing={2} sx={{ margin: "10px", alignItems: "center" }}>
              <h2>Sign in to eManage</h2>
              <TextField
                label="Username"
                placeholder="Enter Username..."
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />

              <TextField
                label="Password"
                placeholder="Enter Password..."
                type={showPassword ? "test" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={toggleShowPassword} />}
                  label="Show Password"
                />
              </FormGroup>

              {isServerError ? (
                <p className="error">Login failed, incorrect credentials!</p>
              ) : null}

              <Button href="/register">Click to register</Button>
              <Button variant="contained" type="submit">
                Login!
              </Button>
            </Stack>
          </Paper>
        </form>
      </Box>
    </div>
  );
};

export default LoginPage;
