import React from 'react';
import {
    Avatar,
    Box,
    Button,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';

const Player = ({ player, setCurrentId }) => {
    const classes = useStyles();
    return (
        <ListItem className={classes.listItem} key={player._id} alignItems="flex-start">
            <ListItemAvatar>
                <Avatar className={classes.media} src={player.selectedFile} variant={"square"} sx={""}/>
            </ListItemAvatar>
            <ListItemText className={ classes.liText} primary={player.name} secondary={player.team} variant="h7"/>
            <Typography className={ classes.liText} variant="h5">
                {player.position}
            </Typography>
            <Box className={ classes.liText }>
                <Button style={{ color: 'black'}} size="small" onClick={() => setCurrentId(player._id)}><MoreVertIcon fontSize="medium" /></Button>
            </Box>
        </ListItem>
    )
}

export default Player;