import CircleIcon from "@mui/icons-material/Circle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCategoryAlt, BiPackage } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IoMdMove } from "react-icons/io";
import { MdNotifications, MdSettingsSuggest } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import BrandLogo from "../../Assets/BrandLogo.svg";

const drawerMenus = [
  {
    title: "Demo",
    icon: AiOutlineHome,
    path: "",
  },
  // {
  //   title: "Customers",
  //   icon: FaUser,
  //   path: "customers",
  //   children: [
  //     {
  //       title: "Customers List",
  //       path: "",
  //     },
  //     {
  //       title: "Customer Profile",
  //       path: "customer-profile",
  //     },
  //   ],
  // },
  // {
  //   title: "Categories List",
  //   icon: BiCategoryAlt,
  //   path: "categories",
  // },
  // {
  //   title: "Products",
  //   icon: IoMdMove,
  //   path: "products",
  //   children: [
  //     {
  //       title: "Manage Products",
  //       path: "",
  //     },
  //     {
  //       title: "Add Products",
  //       path: "add-products",
  //     },
  //   ],
  // },
  // {
  //   title: "Manage Package",
  //   icon: BiPackage,
  //   path: "manage-package",
  // },
  // {
  //   title: "Notification",
  //   icon: MdNotifications,
  //   path: "notification",
  // },
  {
    title: "Settings",
    icon: MdSettingsSuggest,
    path: "settings",
  },
];

const SideDrawer = ({ drawerWidth }) => {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleExpandedMenu = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null);
  };

  const handleMenu = (path) => {
    setExpanded(null);
    navigate(path);
  };

  return (
    <Drawer
      sx={{
        zIndex: 1000,
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          bgcolor: "primary.main",
          color: "white",
          width: drawerWidth,
          boxSizing: "border-box",
        },
        "& svg": {
          color: "white",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Box
        sx={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxHeight: "calc(100vh - 75px)",
          overflowY: "auto",

          // child styles
          "& .MuiButtonBase-root": {
            p: "0px 12px !important",
            fontSize: "14px",
            gap: "12px",
            height: "42px",
            borderRadius: "2px",
            justifyContent: "flex-start",
          },
          "& .MuiPaper-root": {
            color: "inherit",
            bgcolor: "inherit",
          },
          "& .MuiAccordionSummary-root": {
            minHeight: "unset !important",
            gap: "12px",

            "& .MuiAccordionSummary-content": {
              gap: "12px",
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              transform: "rotate(270deg)",
            },
            "& .Mui-expanded.MuiAccordionSummary-expandIconWrapper": {
              transform: "rotate(0deg)",
            },
          },
          "& .MuiAccordionDetails-root": {
            padding: "5px 0 0 2px !important",
          },
        }}
      >
        <Typography variant="body5" fontWeight={500}>
          APPLICATION
        </Typography>
        {drawerMenus?.map(
          ({ title, icon: Icon, path = "", children = "" }, idx) => {
            return (
              <Box key={`drawer-menu-${idx}`}>
                {Boolean(children?.length) ? (
                  <Accordion
                    expanded={expanded === `panel${idx}`}
                    onChange={handleExpandedMenu(`panel${idx}`)}
                    elevation={0}
                  >
                    <AccordionSummary
                      aria-controls={`panel${idx}d-content`}
                      id={`panel${idx}d-header`}
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <Icon
                        style={{
                          fontSize: "18px",
                        }}
                      />
                      <Box component="span">{title}</Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      {children.map(
                        ({ title: childTitle, path: childPath }, idx) => {
                          return (
                            <Button
                              key={`drawer-sub-menu-${idx}`}
                              size="small"
                              onClick={() =>
                                navigate(
                                  `/${path}${childPath ? `/${childPath}` : ""}`
                                )
                              }
                              fullWidth
                              variant="text"
                              sx={{
                                bgcolor: Boolean(
                                  `/${path}${
                                    childPath ? `/${childPath}` : ""
                                  }` === pathname
                                )
                                  ? "white"
                                  : "transparent",
                                color: Boolean(
                                  `/${path}${
                                    childPath ? `/${childPath}` : ""
                                  }` === pathname
                                )
                                  ? "black"
                                  : "white",
                                "& path": {
                                  color: Boolean(
                                    `/${path}${
                                      childPath ? `/${childPath}` : ""
                                    }` === pathname
                                  )
                                    ? "black"
                                    : "white",
                                },

                                "&:hover": {
                                  bgcolor: "white",
                                  color: "black",
                                  "& path": {
                                    color: "black",
                                  },
                                },
                              }}
                            >
                              <CircleIcon
                                sx={{
                                  height: "8px",
                                  width: "8px",
                                  ml: "7px",
                                  mr: "3px",
                                }}
                              />
                              <Box component="span">{childTitle}</Box>
                            </Button>
                          );
                        }
                      )}
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <Button
                    fullWidth
                    variant="text"
                    onClick={() => handleMenu(`/${path}`)}
                    sx={{
                      bgcolor: Boolean(`/${path}` === pathname)
                        ? "white"
                        : "transparent",
                      color: Boolean(`/${path}` === pathname)
                        ? "black"
                        : "white",
                      "& path": {
                        color: Boolean(`/${path}` === pathname)
                          ? "black"
                          : "white",
                      },

                      "&:hover": {
                        bgcolor: "white",
                        color: "black",
                        "& path": {
                          color: "black",
                        },
                      },
                    }}
                  >
                    <Icon
                      style={{
                        fontSize: "18px",
                      }}
                    />
                    <Box component="span">{title}</Box>
                  </Button>
                )}
              </Box>
            );
          }
        )}
      </Box>
    </Drawer>
  );
};

export default SideDrawer;
