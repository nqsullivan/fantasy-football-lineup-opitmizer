import React from 'react';
import { useSelector } from "react-redux";
import useStyles from "./styles";

import Player from './Player/Player';
import {
    Box,
    CircularProgress,
    Divider,
    List, Typography,
} from "@material-ui/core";

const Team = ({setCurrentId}) => {
    const team = useSelector((state) => state.team);
    const classes = useStyles();

    return (
        !team.length ? <CircularProgress /> : (
            <Box>
                <Box>
                    <Typography align="center" variant={"h5"}>
                        Starters
                    </Typography>
                </Box>
                <List className={classes.list} >
                    {team.filter((player) => player.starter).map((player) =>(
                        <React.Fragment key={player._id}>
                            <Player player={player} setCurrentId={setCurrentId} starter={true}/>
                            <Divider/>
                        </React.Fragment>
                    ))}
                </List>
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