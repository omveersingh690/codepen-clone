import React from "react";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";

const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <Container position="fixed">
      <Toolbar>
        <Typography variant="h5" color="white">
          Code Editor
        </Typography>
      </Toolbar>
    </Container>
  );
};

export default Header;
