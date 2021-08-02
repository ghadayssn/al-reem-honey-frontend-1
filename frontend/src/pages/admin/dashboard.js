import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { Button, Avatar, TextField, InputBase } from "@material-ui/core";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Dashboard(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = useState("Inbox");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleClick = (e, selectedTab) => {
    setSelectedTab(selectedTab);
  };
  const sidebarItems = [
    {
      text: "Home Page",
      url: "home-page",
    },
    {
      text: "Articles",
      url: "articles",
    },
    {
      text: "Products",
      url: "products",
    },
    {
      text: "About Us",
      url: "about-us",
    },
    {
      text: "Footer",
      url: "footer",
    },
  ];
  // const lowersidebarItems = [
  //   {
  //     text: "All mail",
  //     url: "allmails",
  //   },
  //   {
  //     text: "Trash",
  //     url: "trash",
  //   },
  //   {
  //     text: "Spam",
  //     url: "spam",
  //   },
  // ];
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {sidebarItems.map((item, index) => (
          <Link to={"/admin/dashboard/" + item.url} key={item.text}>
            <ListItem
              onClick={(event) => handleClick(event, item.text)}
              selected={selectedTab == item.text}
              button
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      {/* <List>
        {lowersidebarItems.map((item, index) => (
          <Link to={"/admin/dashboard/" + item.url} key={item.text}>
            <ListItem
              onClick={(event) => handleClick(event, item.text)}
              selected={selectedTab == item.text}
              button
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {/* <InputBase
            className={classes.input}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          /> */}
          <Avatar style={{ position: "absolute", right: "20px" }}>L</Avatar>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden xsUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* Here we'll have to use the routes to be able to navigate through the app and change the tabs w.r.t. the clicked tab btn */}
        <Switch>
          <Route path="/admin/dashboard/">
            {/* <Typography paragraph>
              لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
              ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ...
              بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ... وعند
              موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم
              ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع
              النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من
              الملاحظات او الانتقادات للتصميم الاساسي.
            </Typography>
            <Typography paragraph>
              لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
              ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ...
              بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ... وعند
              موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم
              ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع
              النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من
              الملاحظات او الانتقادات للتصميم الاساسي.
            </Typography> */}
          </Route>
          <Route exact path={"/admin"}>
            <Redirect to={"/admin/articles"}></Redirect>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Dashboard;
