import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    ListItem,
    ListItemAvatar,
    ListItemText, Menu, MenuItem,
    Typography
} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';
import { useDispatch, useSelector } from "react-redux";
import { deletePlayer, makeStarter, makeBench } from "../../../actions/team";

const Player = ({ player, setCurrentId, user, setUser }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const team = useSelector((state) => state.team).filter((player) => player.userId === (user?.result?._id ? user?.result?._id: user?.result?.googleId));
    const starters = team.filter((player) => player.starter);

    useEffect(() => {

    },[]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ListItem className={classes.listItem} key={player._id} alignItems="flex-start">
            <Box className={ classes.buttonEdit }>
                <Button style={{ color: 'black'}} size="small" aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}><MoreVertIcon fontSize="medium" /></Button>
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => setCurrentId(player._id)}>Edit Player</MenuItem>
                <MenuItem onClick={() => {
                    if (!player.starter && starters.filter((p) => (p.position === player.position)).length < 1){
                        dispatch(makeStarter(player._id))
                    } else {
                        if(!player.starter && starters.filter((p) => (p.position === player.position)).length > 0){
                            starters.filter((p) => (p.position === player.position)).forEach((p) => {
                                dispatch(makeBench(p._id))
                            })
                            dispatch(makeStarter(player._id))
                        } else {
                            if (player.starter){
                                dispatch(makeBench(player._id))
                            }
                        }
                    }}}>
                    Make {player.starter ? 'bench' : 'starter'}
                </MenuItem>
                <MenuItem onClick={() => {dispatch(deletePlayer(player._id))}}>Delete</MenuItem>
            </Menu>
            <Typography className={ classes.liText} variant="h5">
                {player.position}
            </Typography>
            <ListItemAvatar>
                <Avatar className={classes.media} src={player.selectedFile} variant={"square"} sx={""}/>
            </ListItemAvatar>
            <ListItemText className={ classes.liText} primary={player.name + " #" + player.number} secondary={player.team} variant="h7"/>
            <Typography className={ classes.liText} variant="h5">
                {player.projPoints.toFixed(1)}
            </Typography>
        </ListItem>
    )
}

export default Player;