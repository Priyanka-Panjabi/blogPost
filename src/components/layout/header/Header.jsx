import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Header.module.scss";
import { ThemeSwitch } from "../../widgets/themeToggle";
import ThemeContext from "../../../utility/themeContext";
import { Link } from "react-router-dom";
import SnoopItDark from "../../../images/SnoopIt.gif";
import SnoopItLight from "../../../images/SnoopItWhite.gif";

export const Header = () => {
  const { window } = Window;
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const [mobileView, setMobileView] = React.useState(false);
  const drawerWidth = 250;
  const navItems = [
    { id: 0, text: "Home" },
    { id: 1, text: "Articles" },
    { id: 2, text: "AboutUs" }
  ];

  const handleDrawerToggle = () => {
    setMobileView((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <nav>
        {navItems.map((item) => (
          <List key={item.id}>
            <Link
              style={{
                textDecoration: "none",
                color: theme ? "white" : "#000000"
              }}
              to={item.text === "Home" ? "/" : `/${item.text}`}
            >
              <ListItem key={item.id} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText
                    style={{ textDecoration: "none !important" }}
                    primary={item.text === "AboutUs" ? "About Us" : item.text}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        ))}
        <ThemeSwitch
          sx={{ m: 1 }}
          checked={theme}
          inputProps={{ "aria-label": "Toggle Theme" }}
          onChange={toggleTheme}
        />
      </nav>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <header>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{ backgroundColor: theme ? "#343434" : "whitesmoke" }}
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
                color: theme ? "white" : "#000000"
              }}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <img
                src={theme ? SnoopItDark : SnoopItLight}
                className={styles.logo}
                alt="logo"
              />
            </Link>
            <Box
              sx={{ display: { xs: "none", sm: "block" } }}
              className={styles.navItems}
            >
              <nav>
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.text === "Home" ? "/" : `/${item.text}`}
                    className={styles.active}
                  >
                    <Button
                      key={item.id}
                      sx={{ color: theme ? "white" : "#000000" }}
                    >
                      {item.text === "AboutUs" ? "About Us" : item.text}
                    </Button>
                  </Link>
                ))}
                <ThemeSwitch
                  sx={{ m: 1 }}
                  inputProps={{ "aria-label": "Toggle Theme" }}
                  onChange={toggleTheme}
                  checked={theme}
                />
              </nav>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileView}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              color: theme ? "white" : "#000000",
              backgroundColor: theme ? "#343434" : "white"
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </header>
  );
};
