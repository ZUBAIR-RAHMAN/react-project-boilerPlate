import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Person2Icon from "@mui/icons-material/Person2";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { MdMessage } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom/dist";
// import BrandLogo from "../../Assets/BrandLogo.svg";
import { useGlobalContext } from "../../Global/GlobalContext";
import SearchField from "./SearchField";

const profileMenus = [
  {
    title: "My account",
    icon: Person2Icon,
    color: "primary.main",
  },
  {
    title: "Reset Password",
    icon: VerifiedUserIcon,
    color: "primary.main",
  },
  {
    title: "Logout",
    icon: LockIcon,
    color: "#FF304F",
  },
];

const TopAppBar = ({ drawerWidth }) => {
  const { currentUser } = useGlobalContext();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <AppBar
      color="color6"
      position="fixed"
      sx={{
        // width: `calc(100% - ${drawerWidth}px)`,
        // ml: `${drawerWidth}px`,
        color: "textBlack",
        boxShadow: 2,
        // zIndex: 99999,
      }}
    >
      <Toolbar
        sx={{
          padding: "12px 24px !important",
          justifyContent: "space-between",
          // gap: "35px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* <Link to="/">
            <Box component="img" src={BrandLogo} />
          </Link> */}
          <Typography sx={{ fontSize: "16px", color: "color16.main" }}>
            DASHBOARD
          </Typography>
          <SearchField />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "35px",
            alignItems: "center",
          }}
        >
          <Badge
            badgeContent={17}
            overlap="circular"
            color="primary"
            sx={{
              "& .MuiBadge-badge": {
                height: "20px",
                width: "20px",
              },
            }}
          >
            <IconButton
              // onClick={() => navigate("/notification")}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ bgcolor: "color5.main", height: "45px", width: "45px" }}
            >
              <MdMessage sx={{ fontSize: "26px" }} />
            </IconButton>
          </Badge>
          <Badge
            badgeContent={17}
            overlap="circular"
            color="primary"
            sx={{
              "& .MuiBadge-badge": {
                height: "20px",
                width: "20px",
              },
            }}
          >
            <IconButton
              onClick={() => navigate("/notification")}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ bgcolor: "color5.main", height: "45px", width: "45px" }}
            >
              <NotificationsIcon sx={{ fontSize: "26px" }} />
            </IconButton>
          </Badge>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Box
              component={Link}
              to="/profile"
              sx={{
                height: "40px",
                width: "40px",
                border: "1px solid",
                borderColor: "primary.main",
                borderRadius: "50%",
              }}
            >
              <Avatar
                sx={{
                  height: 1,
                  width: 1,
                }}
              />
            </Box>
            <Button
              onClick={(event) => setAnchorEl(event.currentTarget)}
              sx={{
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: 1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  {currentUser?.fullname ?? "Admin"}
                </Typography>
                <ArrowDropDownIcon />
              </Box>
              <Typography sx={{ fontSize: "14px" }}>
                {currentUser?.email}
              </Typography>
            </Button>
          </Box>
        </Box>
      </Toolbar>

      {/* profile menu */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        {profileMenus.map(({ title, icon: Icon, color }, idx) => {
          return (
            <MenuItem
              onClick={() => setAnchorEl(null)}
              key={`profile-menus-${idx}`}
            >
              <ListItemIcon>
                <Icon sx={{ color }} />
              </ListItemIcon>
              <ListItemText sx={{ color }}>{title}</ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </AppBar>
  );
};

export default TopAppBar;
