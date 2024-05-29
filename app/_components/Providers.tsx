import React from "react";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CssBaseline />
      <ToastContainer />
      {children}
    </div>
  );
}
