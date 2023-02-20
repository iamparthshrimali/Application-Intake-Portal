import React from "react";
import form from "../../css/home/form.module.css";
import registerForm from "../../css/home/registerForm.module.css";
import { TextField, Button, FormControl } from "@mui/material";
import { MenuItem, Select,NativeSelect, InputLabel } from "@mui/material";

import { Link, Route, Routes } from "react-router-dom";
function Register({ setCurrentForm }) {
  return (
    <div>
      <div className={form.form}>
        <form className={registerForm.registerForm}>
          <div className={registerForm.heading}>
            <h1>Register</h1>
          </div>
          <div className={`${form.fields} ${registerForm.fields}`}>
            <TextField
              variant="standard"
              label="Name"
              type="text"
              className={form.field}
            />
            <TextField
              variant="standard"
              label="Username"
              type="email"
              className={form.field}
            />

<FormControl fullWidth style={{marginTop:21}}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native" >
                Role
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>Agent</option>
                <option value={20}>Reviewer</option>
                <option value={30}>Admin</option>
              </NativeSelect>
              </FormControl>
            <TextField
              variant="standard"
              label="Password"
              type="password"
              className={form.field}
            />


<TextField
              variant="standard"
              label="Confirm password"
              type="password"
              className={form.field}
            />
           

          </div>
          <div className={`${form.button} ${registerForm.loginBtn}`}>
            <Button variant="contained" size="large" color="primary">
              Register
            </Button>
          </div>
          <div className={`${form.alter}`}>
            Already have an Account ?{" "}
            <a onClick={() => setCurrentForm("login")}>Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
