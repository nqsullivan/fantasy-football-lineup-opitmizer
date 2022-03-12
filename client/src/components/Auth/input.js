import React from 'react';
import {Grid, IconButton, InputAdornment, TextField} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

const Input = ({ name, handleChange, label, handleShowPassword, type, autoFocus, half, value }) => {
    return (
        <>
            <Grid item xs={12} sm={half ? 6 : 12}>
                <TextField
                    name={name}
                    variant={"outlined"}
                    label={label}
                    fullWidth
                    value={value}
                    onChange={handleChange}
                    type={type}
                    autoFocus={autoFocus}
                    required
                    InputProps={name === 'password' ? {
                        endAdornment: (
                            <InputAdornment position={"end"}>
                                <IconButton onClick ={handleShowPassword}>
                                    {type === 'password' ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }: null}
                />
            </Grid>
        </>
    );
};

export default Input;
