import React from "react";
import { Container, Box } from "@mui/material";
import DataProvider from "./context/DataProvider"; // Context Provider
import Home from "./components/Home"; // Main Content

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
