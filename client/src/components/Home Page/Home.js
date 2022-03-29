import {Box, Grid, Grow, Paper, Typography} from "@material-ui/core";
import Team from "../Team/Team";
import Form from "../Form/Form";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getTeam} from "../../actions/team";
import useStyles from './styles';

const Home = () => {
    const classes = useStyles();
    const [currentId, setCurrentId ] = useState(0);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeam());
    }, [ currentId, dispatch ]);
    if(user) {
    return (
        <Grow in>
            <Box width="lg" className={classes.box}>
                <Grid container className="grid" justifyContent={'space-between'} alignItems="stretch">
                    <Grid item xs={12} sm={7}>
                        <Team setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Box>
        </Grow>

    );
    } else {
        return (
            <Box className={classes.box}>
                <Paper className={classes.paper}>
                    <Typography align={'center'} variant={"h5"}>
                        Please log in to save and edit your lineup
                    </Typography>
                </Paper>
            </Box>

            )

}
};

export default Home;