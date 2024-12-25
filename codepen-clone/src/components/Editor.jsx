import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa"; // Import icons from react-icons
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "../App.css"; // Custom CSS styles

// Container for the editor with responsive design
const Container = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 30%; /* Prevent editors from shrinking too much */
  max-width: 45%;
  background: #333;
  border-radius: 5px;
  transition: transform 0.3s;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05); /* Zoom effect on hover */
  }
`;

// Styled Heading section inside each editor
const Heading = styled(Box)`
  background: #444;
  padding: 15px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px 5px 0 0;
  font-size: 16px;
`;

// Header within the editor to display icon and heading
const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #222;
  color: #aaa;
  font-weight: 600;
  padding: 10px;
`;

// Icon container with different colors for each language
const IconContainer = styled(Box)`
  background: ${({color}) => color || 'gray'};
  height: 20px;
  width: 20px;
  display: flex;
  place-content: center;
  border-radius: 5px;
  margin-right: 5px;
`;

const Editor = ({ heading, value, onChange, language }) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value); // Update the context state
  };

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <IconContainer color={language === "HTML" ? "#E34F26" : language === "CSS" ? "#2965F1" : "#F7DF1E"}>
            {language === "HTML" ? <FaHtml5 size={14} color="#fff" /> : language === "CSS" ? <FaCss3Alt size={14} color="#fff" /> : <FaJsSquare size={14} color="#fff" />}
          </IconContainer>
          {heading}
        </Heading>
        <CloseFullscreenIcon onClick={() => setOpen((prevState) => !prevState)} />
      </Header>

      {/* Controlled CodeMirror Editor */}
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: "material",
          lineNumbers: true,
          lineWrapping: true, // Add line wrapping for better readability
        }}
      />
    </Container>
  );
};

export default Editor;
