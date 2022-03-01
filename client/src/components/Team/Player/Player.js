import React, {useEffect} from 'react';
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
import {useDispatch} from "react-redux";
import { deletePlayer } from "../../../actions/team";

const Player = ({ player, setCurrentId  }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();

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
                <MenuItem onClick={handleClose}>Make starter</MenuItem>
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
                {player.projPoints % 1 === 0 ? player.projPoints+ ".0": player.projPoints}
            </Typography>
        </ListItem>
    )
}

export default Player;