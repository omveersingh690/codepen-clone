import React, { useContext } from "react";
import { Box, styled } from "@mui/material";
import { DataContext } from "../context/DataProvider"; // Context to share state
import Editor from "./Editor"; // Editor Component

// Styled container to hold all editors in a row with responsive design
const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap; /* Ensure it wraps on smaller screens */
  gap: 15px; /* Space between editors */
  justify-content: space-between;
  padding: 20px;
  margin-top: 10vh; /* To make space below header */
`;

const OutputContainer = styled(Box)`
  flex: 1;
  background: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added shadow */
`;

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

  return (
    <Box>
      <Container>
        {/* Editor for HTML */}
        <Editor heading="HTML Editor" value={html} onChange={setHtml} language="HTML" />
        
        {/* Editor for CSS */}
        <Editor heading="CSS Editor" value={css} onChange={setCss} language="CSS" />
        
        {/* Editor for JavaScript */}
        <Editor heading="JavaScript Editor" value={js} onChange={setJs} language="JavaScript" />
      </Container>

      {/* Output Container - Live Preview */}
      <OutputContainer>
        <iframe
          title="live-preview"
          srcDoc={`<html><head><style>${css}</style></head><body>${html}</body><script>${js}</script></html>`}
          style={{
            width: "100%",
            height: "500px",
            border: "none",
          }}
        />
      </OutputContainer>
    </Box>
  );
};

export default Code;
