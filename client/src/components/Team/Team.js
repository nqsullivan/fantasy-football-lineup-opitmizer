import React from 'react';
import { useSelector } from "react-redux";
import useStyles from "./styles";

import Player from './Player/Player';
import {
    CircularProgress,
    Divider,
    List,
} from "@material-ui/core";

const Team = ({setCurrentId}) => {
    const team = useSelector((state) => state.team);
    const classes = useStyles();

    console.log(team);

    return (
        !team.length ? <CircularProgress /> : (
            <List className={classes.list} >
                {team.map((player) => (
                    <React.Fragment key={player._id}>
                        <Player player={player} setCurrentId={setCurrentId}/>
                        <Divider/>
                    </React.Fragment>
                ))}

            </List>
        )
    )
}

export default Team;