import React, {useEffect, useState} from 'react';
import {
    Container,
    AppBar,
    Typography,
    Button,
    Grow, Grid, Toolbar, Box,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Team from './components/Team/Team';
import Form from './components/Form/Form';
import useStyles from './styles';
import { getTeam } from './actions/team';
import { useDispatch } from "react-redux";

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeam());
    }, [currentId, dispatch])


    return(
        <Container width="lg" disableGutters>
            <AppBar className = {classes.appBar} position='fixed'>
                <Grid container justifyContent={'space-between'} alignItems="stretch">
                    <Grid item>
                        <Box sx={{my: "1rem"}}>
                            <Typography className = {classes.heading} variant ="h2" >Fantasy Football Lineup Optimizer</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box className = {classes.heading} sx={{pr: "2rem",my: "1rem"}}>
                            <Button size={"large"} color={"primary"} onClick={() => {}}>
                                <MenuIcon fontSize="large" />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </AppBar >
            <Toolbar/>
            <Grow in>
                <Box width="lg" sx={{pt: "2rem"}}>
                    <Grid container className="grid" justifyContent={'space-between'} alignItems="stretch" >
                        <Grid item xs={12} sm={7}>
                            <Team setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Box>
            </Grow>
        </Container>
    )
}

export default App;