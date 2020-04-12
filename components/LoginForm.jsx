import React from 'react';

export default function LoginForm(props) {
    return (
        <div className="login">
            <div>
                <button name="login" 
                className="log-btn" 
                onClick={(evt) => props.changeMode(evt)} 
                style={props.mode === "login" ? { backgroundColor : "#f5ba13" } : { backgroundColor : "#a3a8a5" }}>
                Log In
                </button>

                <button 
                name="signup" 
                className="sign-btn" 
                onClick={(evt) => props.changeMode(evt)} 
                style={props.mode === "signup" ? { backgroundColor : "#f5ba13" } : { backgroundColor : "#a3a8a5" }}>
                Sign Up
                </button>
            </div>
            <p>{props.error}</p>
            <input name="name" className="name-input" type="text" placeholder="User Name" onChange={(evt) => props.onChange(evt)} value={props.details.name}
             style={props.mode !== "signup" ? { display : "none" } : { display : "inline" }} />
            <input name="email" className="email-input" type="email" placeholder="Email" onChange={(evt) => props.onChange(evt)} value={props.details.email}/>
            <input name="pass" className="pass-input" type="password" placeholder="Password" onChange={(evt) => props.onChange(evt)} value={props.details.pass}/>
            <button onClick={() => props.onSubmit()} className="submit-btn">Submit</button>
        </div>
    );
};