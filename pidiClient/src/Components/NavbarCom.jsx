import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { useNavigate } from "react-router-dom";

function NavbarCom({ customButtons }) {
  const navigate = useNavigate();

  return (
    <AppBar position={"static"} elevation={3}>
      <Toolbar>
        <IconButton
          size={"large"}
          edge={"start"}
          color={"inherit"}
          aria-label={"logo"}
          onClick={() => navigate("/login")}
        >
          <PetsIcon />
        </IconButton>
        <Typography variant={"h6"} component={"div"} sx={{ flexGrow: 1 }}>
          PIĐI
        </Typography>
        <Stack direction={"row"} spacing={2}>
          {customButtons.map((button) => button)}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavbarCom;
