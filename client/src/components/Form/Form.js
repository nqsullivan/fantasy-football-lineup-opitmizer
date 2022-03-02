import React, {useEffect, useState} from 'react';
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';

import useStyles from './styles';
import { createPlayer, updatePlayer } from '../../actions/team';
import {Button, Checkbox, FormControlLabel, FormGroup, Paper, TextField, Typography} from "@material-ui/core";

const Form = ({currentId, setCurrentId}) => {

    const [playerData, setPlayerData] = useState({name: '',number: '',team:'',position:'',projPoints: '',selectedFile: '',starter: 'false'});
    const player = useSelector((state) => currentId ? state.team.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        if(player) setPlayerData(player)
    },[player])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updatePlayer(currentId, playerData))
        } else {
            dispatch(createPlayer(playerData));
        }

        clear();

    }

    const handleChange = (e) => {
        e.preventDefault();

        playerData.starter = !playerData.starter
    }

    const clear = () =>{
        setPlayerData({name: '',number: '',team:'',position:'',projPoints: '',selectedFile: '',starter: 'false'});
        setCurrentId(null);
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant={"h6"}>Add a Player</Typography>
                <TextField name={"name"} variant={"outlined"} label={"Name"} fullWidth value={playerData.name} onChange={(e) => setPlayerData({ ...playerData, name: e.target.value})}/>
                <TextField name={"number"} variant={"outlined"} label={"Number"} fullWidth value={playerData.number} onChange={(e) => setPlayerData({ ...playerData, number: e.target.value})}/>
                <TextField name={"position"} variant={"outlined"} label={"Position"} fullWidth value={playerData.position} onChange={(e) => setPlayerData({ ...playerData, position: e.target.value})}/>
                <TextField name={"team"} variant={"outlined"} label={"Team"} fullWidth value={playerData.team} onChange={(e) => setPlayerData({ ...playerData, team: e.target.value})}/>
                <TextField name={"projected points"} variant={"outlined"} label={"Projected Points"} fullWidth value={playerData.projPoints} onChange={(e) => setPlayerData({ ...playerData, projPoints: e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type={"file"} multiple={false} onDone={({base64}) => setPlayerData({...playerData, selectedFile: base64 })}/>
                </div>
                <FormGroup className={classes.checkBox}>
                    <FormControlLabel control={<Checkbox  onChange={handleChange} label={'starter?'} inputProps={{ 'aria-label': 'controlled' }}/>} label="Label" />
                </FormGroup>

                <Button className={classes.buttonSubmit} variant={"contained"} color={"primary"} size={"large"} type ="submit" fullWidth>Submit</Button>
                <Button variant={"contained"} color={"secondary"} size={"small"} onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;