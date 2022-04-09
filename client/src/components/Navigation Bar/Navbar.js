import React, {useEffect, useState} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {useDispatch} from "react-redux";
import decode from "jwt-decode";
import {
    AppBar,
    Avatar,
    Box, Button,
    Divider,
    Grid,
    IconButton,
    ListItemIcon, Menu,
    MenuItem,
    Tooltip,
    Typography
} from "@material-ui/core";
import useStyles from './styles';
import { Settings, MeetingRoom } from "@material-ui/icons";

const Navbar = () => {
    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const open = Boolean(anchorEl);
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        setUser(null);
        navigate('/auth');
    };

    useEffect((user, logout) => {
        const token = user?.token;

        if(token){
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <AppBar className = {classes.appBar} position='fixed'>
            <Grid container justifyContent={'space-between'} alignItems="stretch">
                <Grid item>
                    <Box sx={{ my: "1rem" }}>
                        <Typography className = {classes.heading} variant ="h5" component={Link} to={'/'}>Fantasy Football Lineup Optimizer</Typography>
                    </Box>
                </Grid>
                <Grid item className= {classes.profile}>
                    {user?.result ? (
                        <>
                            <Typography className = {classes.profileText}>{user?.result.name}</Typography>
                            <Box>
                                <Tooltip  title="Account settings">
                                    <IconButton onClick={handleClick} size="small"
                                                aria-controls={open ? 'account-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar className = {classes.avatar} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu  anchorEl = {anchorEl} open={open} onClose={handleClose} onClick={handleClose}>
                                <MenuItem >
                                    <Avatar className = {classes.avatar} alt={user?.result.name} src={user?.result.imageUrl}/>{user?.result.name}
                                </MenuItem>
                                <Divider />
                                <MenuItem>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={logout}>
                                    <ListItemIcon>
                                        <MeetingRoom fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </>
                    ):(
                        <>
                            <Button className={classes.heading} varient="contained" component={Link} to={"/Auth"}>Login</Button>
                        </>
                    )}
                </Grid>
            </Grid>
        </AppBar >
    )
}

export default Navbar;