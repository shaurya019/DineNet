import React from "react";
import LoginModal from "./components/Login/LoginModal";
import { initializeFirebase } from "./utils/firebaseUtils";
import RecaptchaContainer from "./components/RecaptchaContainer";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { ThemeProvider } from "@mui/material";
import { theme } from "./configuration/muiTheme";

initializeFirebase();

export default function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}
