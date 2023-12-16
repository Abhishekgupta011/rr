import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/Index";
import classes from './AuthForm.module.css'
const AuthForm = () =>{
    const dispatch = useDispatch();
    const authSubmitHandler =(event)=>{
        event.preventDefault();
        dispatch(authActions.login())
    }
    return(
    <main className={classes.auth}>
      <section>
        <form onSubmit={authSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
    )
    
}

export default AuthForm;