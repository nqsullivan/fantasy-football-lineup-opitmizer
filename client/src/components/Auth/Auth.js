import React, {useState} from 'react';
import {
    Box,
    Button,
    Grid,
    Paper,
} from "@material-ui/core";
import useStyles from "./styles";
import Input from './input';
import { GoogleLogin } from 'react-google-login';
import Icon from './Icon';
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, signup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setSignup] = useState(false);
    const [ formData, setFormData ] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup) {
            dispatch(signup( formData, navigate ));
        } else {
            dispatch(login( formData, navigate ))
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name ]: e.target.value })
    }

    const switchMode = () => {
        setSignup((prevSignup) => !prevSignup);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try{
            dispatch({ type: 'AUTH', data: { result, token }});

            navigate('/');
        }catch(error){
            console.log(error);
        }
    }

    const googleFailure = (error) => {
        console.log(error+'Google Sign In was unsuccessful. Try Again Later');
    }



    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);


    return (
            <Box width="lg" sx={{pt: "2rem"}}>
                <Grid container justifyContent={'space-between'} alignItems="center">
                    <Grid item className={classes.form}>
                        <Paper className={classes.paper}>
                            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    {isSignup && (
                                        <>
                                            <Input name={"firstName"} label={"First Name"} handleChange={handleChange} autoFocus half/>
                                            <Input name={"lastName"} label={"Last Name"} handleChange={handleChange} half/>
                                        </>
                                    )}
                                            <Input name={"email"} label={"Email"} handleChange={handleChange} type={"email"} />
                                            <Input name={"password"} label={"Password"} handleChange={handleChange} handleShowPassword={handleShowPassword} type={showPassword ? 'text': 'password'}/>
                                    {isSignup && (
                                        <>
                                            <Input name={"confirmPassword"} label={"Re-enter Password"} handleChange={handleChange} handleShowPassword={handleShowPassword} type={showPassword ? 'text': 'password'}/>
                                        </>
                                    )}
                                    <Button className={classes.buttonSubmit} variant={"contained"} onClick={switchMode}>{!isSignup ? 'Dont have an account? Click here to sign up' : 'Already have an account? Click here to sign in'}</Button>
                                    <Button className={classes.buttonSubmit} variant={"contained"} color={"primary"} size={"large"} type ="submit" fullWidth>{!isSignup ? 'Login' : 'Sign Up'}</Button>
                                    <GoogleLogin
                                        clientId={"398328006946-b16s9g5igvlbj5b1osbjdgjidcg7b2tp.apps.googleusercontent.com"}
                                        render={(renderProps)=>(
                                            <Button color={'primary'} fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant={'contained'}>
                                                Google Login
                                            </Button>
                                        )}
                                        onSuccess={googleSuccess}
                                        onFailure={googleFailure}
                                        cookiePolicy={"single_host_origin"}

                                    />
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
    );
};

export default Auth;
