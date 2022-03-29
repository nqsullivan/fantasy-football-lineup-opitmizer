import React, {useState} from 'react';
import { useSelector } from "react-redux";
import useStyles from "./styles";

import Player from './Player/Player';
import {
    Box,
    CircularProgress,
    Divider,
    List, Paper, Typography,
} from "@material-ui/core";

const Team = ({setCurrentId}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const team = useSelector((state) => state.team).filter((player) => player.userId === (user?.result?._id ? user?.result?._id: user?.result?.googleId));
    const classes = useStyles();

    return (
        !team.length ? <Box><Paper><Typography align="center" variant={"h5"}>Please add a player to get started</Typography></Paper></Box>: (
            <Box>
                <Typography align="center" variant={"h5"}>
                    Starters
                </Typography>

                <List className={classes.list} >
                    {team.filter((player) => player.starter).map((player) =>(
                        <React.Fragment key={player._id}>
                            <Player player={player} setCurrentId={setCurrentId}/>
                            <Divider/>
                        </React.Fragment>
                    ))}
                </List>
                <Typography className={classes.totalPoints} align="right" variant={'h5'}>
                    Total Projected Points: {team.filter((player) => player.starter).reduce((total, player) => total + player.projPoints, 0).toFixed(2)}
                </Typography>
                <p/>
                <Typography align="center" variant={"h5"}>
                    Bench
                </Typography>
                <List className={classes.list} >
                    {team.filter((player) => !player.starter).map((player) =>(
                        <React.Fragment key={player._id}>
                            <Player player={player} setCurrentId={setCurrentId} starter={false}/>
                            <Divider/>
                        </React.Fragment>
                    ))}
                </List>
            </Box>
        )
    )


}

export default Team;