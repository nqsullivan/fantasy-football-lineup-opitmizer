import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useStyles from "./styles";

import Player from './Player/Player';
import {
    Box, Button,
    Divider, Grid,
    List, ListItem, Paper, Typography
} from "@material-ui/core";

import {makeBench, makeStarter} from "../../actions/team";

const Team = ({ setCurrentId }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const team = useSelector((state) => state.team).filter((player) => player.userId === (user?.result?._id ? user?.result?._id: user?.result?.googleId));
    const dispatch = useDispatch();
    const starters = team.filter((player) => player.starter);
    const bench = team.filter((player) => !player.starter);
    const classes = useStyles();

    return (
        !team.length ? <Box><Paper><Typography align="center" variant={"h5"}>Please add a player to get started</Typography></Paper></Box>: (
            <Box>
                <Typography align="center" variant={"h5"}>
                    Starters
                </Typography>

                <List className={classes.list} >
                    {starters.filter((player) => (player.position === 'QB')).length > 0 ? (starters.filter((player) => (player.position === 'QB')).map((player) =>(
                        <React.Fragment key={player._id}>
                            <Player player={player} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
                            <Divider/>
                        </React.Fragment>))) :
                    <ListItem className={classes.listItem}>
                        <Grid container alignItems="center">
                            <Grid item container xs={2} md={2}>
                                <Typography display={"inline"} className={ classes.liText} variant="h5">QB:</Typography>
                            </Grid>
                            <Grid item container xs={10} md={10}>
                                <Typography display={"inline"} className={ classes.liText}>Please add a Quarterback</Typography>
                            </Grid>
                        </Grid>
                    </ListItem>}
                    {starters.filter((player) => (player.position === 'RB')).length > 0 ? (starters.filter((player) => (player.position === 'RB')).map((player) =>(
                        <React.Fragment key={player._id}>
                            <Player player={player} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
                            <Divider/>
                        </React.Fragment>))) :
                    <ListItem className={classes.listItem}>
                        <Grid container alignItems="center">
                            <Grid item container xs={2} md={2}>
                                <Typography display={"inline"} className={ classes.liText} variant="h5">RB:</Typography>
                            </Grid>
                            <Grid item container xs={10} md={10}>
                                <Typography display={"inline"} className={ classes.liText}>Please add a Running Back</Typography>
                            </Grid>
                        </Grid>
                    </ListItem>}
                    {starters.filter((player) => (player.position === 'WR')).length > 0 ? (starters.filter((player) => (player.position === 'WR')).map((player) =>(
                        <React.Fragment key={player._id}>
                            <Player player={player} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
                            <Divider/>
                        </React.Fragment>))) :
                    <ListItem className={classes.listItem}>
                        <Grid container alignItems="center">
                            <Grid item container xs={2} md={2}>
                                <Typography display={"inline"} className={ classes.liText} variant="h5">WR:</Typography>
                            </Grid>
                            <Grid item container xs={10} md={10}>
                                <Typography display={"inline"} className={ classes.liText}>Please add a Wide Receiver</Typography>
                            </Grid>
                        </Grid>
                    </ListItem>}
                    {starters.filter((player) => (player.position === 'TE')).length > 0 ? (starters.filter((player) => (player.position === 'TE')).map((player) =>(
                        <React.Fragment key={player._id}>
                            <Player player={player} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
                            <Divider/>
                        </React.Fragment>))) :
                    <ListItem className={classes.listItem}>
                        <Grid container alignItems="center">
                            <Grid item container xs={2} md={2}>
                                <Typography display={"inline"} className={ classes.liText} variant="h5">TE:</Typography>
                            </Grid>
                            <Grid item container xs={10} md={10}>
                                <Typography display={"inline"} className={ classes.liText}>Please add a Tight End</Typography>
                            </Grid>
                        </Grid>
                    </ListItem>}

                    {starters.filter((player) => (player.position === 'DEF')).length > 0 ? (starters.filter((player) => (player.position === 'DEF')).map((player) =>(
                        <React.Fragment key={player._id}>
                            <Player player={player} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
                            <Divider/>
                        </React.Fragment>))) :
                    <ListItem className={classes.listItem}>
                        <Grid container alignItems="center">
                            <Grid item container xs={2} md={2}>
                                <Typography display={"inline"} className={ classes.liText} variant="h5">DEF:</Typography>
                            </Grid>
                            <Grid item container xs={10} md={10}>
                                <Typography display={"inline"} className={ classes.liText}>Please add a Defensive Player</Typography>
                            </Grid>
                        </Grid>
                    </ListItem>}
                    {starters.filter((player) => (player.position === 'K')).length > 0 ? (starters.filter((player) => (player.position === 'K')).map((player) =>(
                            <React.Fragment key={player._id}>
                                <Player player={player} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
                                <Divider/>
                            </React.Fragment>))) :
                        <ListItem className={classes.listItem}>
                            <Grid container alignItems="center">
                                <Grid item container xs={2} md={2}>
                                    <Typography display={"inline"} className={ classes.liText} variant="h5">K:</Typography>
                                </Grid>
                                <Grid item container xs={10} md={10}>
                                    <Typography display={"inline"} className={ classes.liText}>Please add a Kicker</Typography>
                                </Grid>
                            </Grid>
                        </ListItem>}
                </List>
                <Paper className={classes.paper}>
                    <Grid container alignItems="center" direction={'column'}>
                        <Grid item container justifyContent={'flex-end'}>
                            <Typography className={classes.totalPoints} align="right" variant={'h5'}>
                                Total Projected Points: {team.filter((player) => player.starter).reduce((total, player) => total + player.projPoints, 0).toFixed(2)}
                            </Typography>
                        </Grid>
                        <Grid item container>
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                size={"large"}
                                fullWidth
                                sx={{ ml: '1rem' }}
                                onClick={() => {
                                    let noneAtPosition = true;
                                    bench.forEach((benchPlayer) => {
                                        starters.forEach((starter) => {
                                            if (starter.position === benchPlayer.position) {
                                                if (starter.projPoints < benchPlayer.projPoints) {
                                                    dispatch(makeBench(starter._id));
                                                    dispatch(makeStarter(benchPlayer._id));
                                                }
                                                noneAtPosition = false;
                                            }
                                        })
                                        if(noneAtPosition){
                                            dispatch(makeStarter(benchPlayer._id));
                                            starters.push(...bench.filter((player) => player._id === benchPlayer._id), {starter: true});
                                            bench.splice(bench.indexOf(bench.filter((player) => player._id !== benchPlayer._id)),1);
                                        }
                                    })
                                }}
                            >Optimize Team
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
                <p/>
                <Typography align="center" variant={"h5"}>
                    Bench
                </Typography>
                <List className={classes.list} >
                    {team.filter((player) => !player.starter).map((player) =>(
                        <React.Fragment key={player._id}>
                            <Player player={player} setCurrentId={setCurrentId} user={user} setUser={setUser}/>
                            <Divider/>
                        </React.Fragment>
                    ))}
                </List>
            </Box>
        )
    )


}

export default Team;