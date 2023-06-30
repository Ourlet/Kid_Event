import React from "react";
import App from "../App";
import { AppProvider } from "../context";

export default function Home() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
