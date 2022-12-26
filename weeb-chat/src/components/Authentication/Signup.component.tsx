import React from "react";
import TextField  from "@mui/material/TextField";

import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { unmountComponentAtNode } from "react-dom";


interface MyForm{
    username: string;
    email: string;
    password: string;
}

const Signup = () => {
    const {handleSubmit, reset, setError, register, formState:{errors}} = useForm<MyForm>();

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };
    return(
        <div className="container">
            <h1 className="signup-title">WeebChat</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <TextField     
                label="Username"
                type='text'
                error={!!errors.username}
                helperText={errors?.username?.message}
                defaultValue={''}
                placeholder="M Abba"
                variant="standard"
                {...register('username', {required: "username is required"})}
            />
            <br />
            <TextField     
                label="Email"
                type="email"
                defaultValue={''}
                error={!!errors.email}
                helperText={errors?.email?.message}
                placeholder="@fakemail.dom"
                variant="standard"
                {...register('email', {required: "email is required"})}
            />
            <br />
            <TextField
                label="password"
                type="password"
                variant="standard"
                error={!!errors.password}
                helperText={errors?.password?.message}
                {...register('password', {required: "field can not be empty"})}
            />
            <br />
            <Button type="submit">signup</Button>
        </form>
        </div>
    )
}
export default Signup;
















