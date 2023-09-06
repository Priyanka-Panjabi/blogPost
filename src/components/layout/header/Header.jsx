import * as React from "react";
import {AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from './Header.module.scss';
import {ThemeSwitch} from '../../widgets/themeToggle'

export const Header = () => {
  const { window } = Window;
  const [mobileView, setMobileView] = React.useState(false);
  const drawerWidth = 250;
  const navItems = ["Home", "Articles", "About Us"];

  const [pageTheme, setPageTheme] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileView((prevState) => !prevState);
  };

  const themeToggleHandler = () => {
    //false means light, true means dark
    setPageTheme((prevState)=> !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", }}>
      <nav>
      {navItems.map((item) => (
        <List>
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
          </List>
        ))} 
        <ThemeSwitch sx={{ m: 1 }} checked={pageTheme} inputProps={{ 'aria-label': 'Toggle Theme' }} 
          onChange={()=>themeToggleHandler()}
        />
      </nav>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined; 
  return(
    <header>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor: pageTheme?'#000000': 'whitesmoke' }}>
        <Toolbar >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } , color: pageTheme? 'white':'#000000' }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className={styles.navItems}>
            <nav>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: pageTheme? 'white':'#000000' }}>
                {item}
              </Button>
            ))}
            <ThemeSwitch sx={{ m: 1 }}
              inputProps={{ 'aria-label': 'Toggle Theme' }}
              onChange={()=>themeToggleHandler()}
              checked={pageTheme}
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, color:pageTheme? 'white':'#000000', backgroundColor: pageTheme?'#000000':'white', },
          }}
          
        >
          {drawer}
        </Drawer>
        
    </Box>
    </header>
  )
}