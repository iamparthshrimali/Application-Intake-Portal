import React from 'react'
import form from "../../css/home/form.module.css"
import loginForm from  "../../css/home/loginForm.module.css"
import { TextField,Button } from '@mui/material'
import { Link } from 'react-router-dom'


function Login({setCurrentForm}) {
 
  return (
    <div className={form.form}>
        <form className={loginForm.loginForm}>
            <div className={loginForm.heading}>
                <h1>Login</h1>
            </div>
            <div className={`${form.fields} ${loginForm.fields}`}>
                <TextField variant="standard" label="Username" type="email" className={form.field} />
                <TextField variant="standard" label="Password" type="password" className={form.field}/>
            </div>
            <div className={`${form.button} ${loginForm.loginBtn}`}>
                 <Button variant="contained" size="large" color="primary">Login</Button>
            </div>
            <div className={`${form.alter}`}>
               Don't You have an Account ?  <a onClick={()=>setCurrentForm("register")}>Register</a>

               {/* Don't You have an Account ?  <a onClick={()=>setCurrentForm("register")}>Register</a> */}
            </div>
        </form>
    </div>
  )
}

export default Login
