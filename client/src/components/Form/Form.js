import React, {useEffect, useState} from 'react';
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';

import useStyles from './styles';
import {createPlayer, updatePlayer, makeBench, getTeam} from '../../actions/team';
import {
    Button,
    Checkbox,
    FormControlLabel, FormGroup,
    Grid,
    MenuItem,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";

const Form = ({ currentId, setCurrentId }) => {

    const [playerData, setPlayerData] = useState({name: '',number: '',team:'',position:'',projPoints: '',selectedFile: '',starter: 'false',user: ''});
    const player = useSelector((state) => currentId ? state.team.find((p) => p._id === currentId) : null);
    const team = useSelector((state) => state.team);
    const starters = team?.filter((p) => p.starter === true);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        if(player) setPlayerData(player)
    },[player])

    const clear = () =>{
        setPlayerData({name: '',number: '',team:'',position:'',projPoints: '',selectedFile: '',starter: 'false',user: ''});
        setCurrentId(null);
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                <Typography variant={"h6"}>Add a Player</Typography>
                <TextField name={"name"} variant={"outlined"} label={"Name"} fullWidth value={playerData.name} onChange={(e) => {e.preventDefault(); setPlayerData({ ...playerData, name: e.target.value })}}/>
                <TextField name={"number"} variant={"outlined"} label={"Number"} fullWidth value={playerData.number} onChange={(e) => {e.preventDefault(); setPlayerData({ ...playerData, number: e.target.value })}}/>
                <TextField onChange={(e) => setPlayerData({ ...playerData, position: e.target.value})} variant={'outlined'} value={playerData.position ? playerData.position : ''} fullWidth select label="Position"
                >
                    <MenuItem value={'QB'}>Quarterback</MenuItem>
                    <MenuItem value={'WR'}>Wide Receiver</MenuItem>
                    <MenuItem value={'RB'}>Runningback</MenuItem>
                    <MenuItem value={'TE'}>Tight End</MenuItem>
                    <MenuItem value={'K'}>Kicker</MenuItem>
                    <MenuItem value={'DEF'}>Defense</MenuItem>
                </TextField>
                <TextField name={"team"} variant={"outlined"} label={"Team"} fullWidth value={playerData.team} onChange={(e) => {e.preventDefault(); setPlayerData({ ...playerData, team: e.target.value})}}/>
                <TextField name={"projected points"} variant={"outlined"} label={"Projected Points"} fullWidth value={playerData.projPoints} onChange={(e) => {e.preventDefault(); setPlayerData({ ...playerData, projPoints: e.target.value})}}/>
                <Grid container justifyContent={'center'}>
                    <Grid item md={6} xs={6}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    onChange={
                                        (e, checked)=>{e.preventDefault();
                                        setPlayerData({ ...playerData, starter: checked})}
                                }
                                    label={'starter?'}
                                     inputProps={{ 'aria-label': 'controlled' }}/>}
                                    label="Starter?"
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item className={classes.fileInput} container md={6} xs={6} justifyContent={'center'}>
                        <FileBase
                            type={"file"}
                            multiple={false}
                            onDone={
                                ({base64}) => setPlayerData({...playerData, selectedFile: base64 })
                            }
                        />
                    </Grid>
                </Grid>
                <Button
                    className={classes.buttonSubmit}
                    variant={"contained"}
                    color={"primary"}
                    size={"large"}
                    fullWidth
                    onClick={() => {
                        if(currentId){
                            switch(playerData.starter){//if the created player is a starter then we check if there is already a starter else we create the new player
                                case true:
                                    if(starters.filter((p) => (p.position === playerData.position)).length > 0){
                                        starters.filter((p) => (p.position === playerData.position)).forEach((p) => {
                                            dispatch(makeBench(p._id))
                                        })
                                    }
                                    dispatch(updatePlayer(player._id,playerData));
                                    break;

                                case false:
                                default:
                                    dispatch(updatePlayer(player._id,playerData));
                                    break;
                            }
                        }else{
                            switch(playerData.starter){//if the created player is a starter then we check if there is already a starter else we create the new player
                                case true:
                                    if(starters.filter((p) => (p.position === playerData.position)).length > 0){
                                        starters.filter((p) => (p.position === playerData.position)).forEach((p) => {
                                            dispatch(makeBench(p._id));
                                            console.log(playerData.name + ' ' + p.name);
                                        })
                                    }
                                    dispatch(createPlayer(playerData));
                                    break;

                                default:
                                case false:
                                    dispatch(createPlayer(playerData));
                                    break;
                            }
                        }
                        dispatch(getTeam());
                        clear();
                    }
                }>
                    Submit
                </Button>
                <Button variant={"contained"} color={"secondary"} size={"small"} onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;