import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  AppBar,
  Toolbar,
  Slide,
  useScrollTrigger,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    textTransform: "none",
    fontWeight: 700,
    fontSize: "1rem",
    minWidth: 10,
    marginLeft: "25px",
    color: "#fff",
    opacity: 0.7,
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    fontSize: "1rem",
    textTransform: "none",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: 0,
  },
  menuitem: {
    fontSize: "1rem",
    textTransform: "none",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
    "&.Mui-selected": {
      backgroundColor: "#095b94",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#095b94",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    color: "#fff",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
    "&.Mui-selected": {
      backgroundColor: "#095b94",
      opacity: 1,
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#095b94",
      opacity: 1,
    },
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
    color: "#fff",
  },
  drawerIcon: {
    width: "50px",
    height: "50px",
    fontSize: "2rem",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const menuOptions = [
  { name: "Services", link: "/services" },
  { name: "Custom Software Development", link: "/customsoftware" },
  { name: "Mobile App Development", link: "/mobileapp" },
  { name: "Website Development", link: "/website" },
];

function Header(props) {
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (e, i) => {
    props.setSelectedIndex(i);
    setAnchorEl(null);
    props.setValue(1);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleExit = () => {
    localStorage.setItem("id", "");
    localStorage.setItem("token", "");
    navigate("/form");
  };
  useEffect(() => {
    switch (window.location.pathname) {
      case "/home":
        if (props.value !== 0) {
          props.setValue(0);
        }
        props.setSelectedIndex(null);
        break;
      case "/services":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex((prev) => (prev = 0));
        }

        break;

      case "/revolution":
        if (props.value !== 2) {
          props.setValue(2);
        }
        props.setSelectedIndex(null);
        break;

      case "/about":
        if (props.value !== 3) {
          props.setValue(3);
        }
        props.setSelectedIndex(null);
        break;

      case "/contact":
        if (props.value !== 4) {
          props.setValue(4);
        }
        props.setSelectedIndex(null);
        break;

      case "/customsoftware":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex((prev) => (prev = 1));
        }
        break;

      case "/mobileapp":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex((prev) => (prev = 2));
        }
        break;

      case "/website":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex((prev) => (prev = 3));
        }
        break;
      default:
        break;
    }
  }, [props]);
  const tabs = (
    <React.Fragment>
      <Tabs
        indicatorColor="secondary"
        textColor="secondary"
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        <Tab className={classes.tab} component={Link} to="/home" label="Home" />
        <Tab
          id="simple-menu"
          aria-haspopup="true"
          aria-controls={openMenu ? "simple-menu" : undefined}
          aria-expanded={openMenu ? "true" : undefined}
          className={classes.tab}
          onMouseOver={handleClick}
          label="Services"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/revolution"
          label="The Revolution"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/about"
          label="About Us"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/contact"
          label="Contact Us"
        />
      </Tabs>
      <Button
        onClick={handleExit}
        className={classes.button}
        variant="contained"
        color="secondary"
      >
        Free Rstimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        elevation={0}
        classes={{ paper: classes.menu }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        MenuListProps={{
          "aria-labelledby": "simple-menu",
          role: "listbox",
          onMouseLeave: handleClose,
        }}
        disableAutoFocusItem
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            component={Link}
            to={option.link}
            key={index}
            selected={index === props.selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            classes={{ root: classes.menuitem }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <ListItemButton
            className={classes.drawerItem}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(0);
            }}
            divider
            component={Link}
            to="/home"
            selected={props.value === 0}
          >
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton
            className={classes.drawerItem}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(1);
            }}
            divider
            component={Link}
            to="/services"
            selected={props.value === 1}
          >
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Services" />
          </ListItemButton>

          <ListItemButton
            className={classes.drawerItem}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(2);
            }}
            divider
            component={Link}
            to="/revolution"
            selected={props.value === 2}
          >
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="The Revolution" />
          </ListItemButton>

          <ListItemButton
            className={classes.drawerItem}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(3);
            }}
            divider
            component={Link}
            to="/about"
            selected={props.value === 3}
          >
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton>

          <ListItemButton
            className={classes.drawerItem}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(4);
            }}
            divider
            component={Link}
            to="/contact"
            selected={props.value === 4}
          >
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
          <ListItemButton
            className={classes.drawerItemEstimate}
            onClick={() => {
              handleExit();
              setOpenDrawer(false);
            }}
            divider
          >
            <ListItemText sx={{ marginLeft: "17%" }} primary="Free Estimate" />
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton component={Link} to="basket">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingBasketIcon style={{ color: "#fff" }} />
              </StyledBadge>
            </IconButton>
            {!matches && tabs}
            {matches && drawer}
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
export default Header;
