import { Container } from '@material-ui/core';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from "../../../images/login.png";

const Register = () => {

    const [loginData, setLoginData] = useState({})


    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData}
        newLoginData[field] = value
        setLoginData(newLoginData)
        console.log(newLoginData)
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your Password did not match')
            return
        }
        e.preventDefault();
       
    }
    return (
       
             <Container>
                    <Grid container spacing={2}>
                        <Grid item sx={{mt:8}} xs={12} md={6}>
                            <Typography variant="body1" gutterBottom>
                            Register
                            </Typography>
                            <form onSubmit={handleLoginSubmit}>
                            <TextField 
                            sx={{width:'75%', m:1}}
                            id="standard-basic" 
                            label="Email" 
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                            <TextField 
                            sx={{width:'75%', m:1}}
                            id="standard-basic" 
                            type="password" 
                            label="Password" 
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                              <TextField 
                            sx={{width:'75%', m:1}}
                            id="standard-basic" 
                            type="password" 
                            label="Confirm Password" 
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard" />
                            
                            <Button sx={{width:'75%', m:1}} type="submit" variant="contained">Register</Button>
                            <NavLink style={{textDecoration: 'none'}} to="/login"> 
                            <Button sx={{width:'75%', m:1}} type="submit" variant="text">Already Registered? Please Login</Button>
                            </NavLink>

                            </form>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img style={{width: '100%'}} src={login} alt="" />
                        </Grid>
                        
                    </Grid>
        </Container>
       
    );
};

export default Register;