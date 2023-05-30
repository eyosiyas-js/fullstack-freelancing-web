import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import './AppBar.css'
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
const pages = ["Inbox" ];
const DrawerComp = () => {
  const navigate = useNavigate()
  const [openDrawer, setOpenDrawer] = useState(false);
  

  return (
    <React.Fragment>
      <Drawer
        PaperProps={{
          sx: {
            top: 60,
            color: "red",
          },
        }}
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <Button
                onClick={() => navigate('/chat')}
                  sx={{
                    marginLeft: "auto",
                    color: "purple",
                    bgcolor: "white",
                    borderRight: 2,
                    borderLeft: 2,
                    borderTop: 2,
                    borderBottom: 2,
                    borderColor: "#f07d12",
                    borderRadius: "20px",
                    textTransform: "none",
                    width: "100px",
                    "&:hover": {
                      backgroundColor: "#F27405",
                      color: "white",
                    },
                  }}
                  variant="contained"
                >
                  {page}
                </Button>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ color: "purple" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
