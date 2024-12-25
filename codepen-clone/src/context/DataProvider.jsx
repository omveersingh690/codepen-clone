import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [html, setHtml] = useState("<h1>HTML</h1>");
  const [css, setCss] = useState("body { background-color: #f0f0f0; }");
  const [js, setJs] = useState("console.log('Hello World!');");

  return (
    <DataContext.Provider value={{ html, setHtml, css, setCss, js, setJs }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
