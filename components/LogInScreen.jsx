import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LoginForm from "./LoginForm";
import { useRouter } from 'next/router'

export default function LogInScreen() {
    const router = useRouter();
    const [mode, setMode] = React.useState("login");
    const [details, setDetails] = React.useState({ name: "", email: "", pass: "" });
    const [error, setError] = React.useState("");

    function changeMode(evt) {
        setMode(evt.target.name);
        setError("");
        setDetails({ name: "", email: "", pass: "" });
    };

    function onChange(evt) {
        const { name, value } = evt.target;
        setDetails((preVal) => {
            return { ...preVal, [name]: value };
        });
        if (error !== null) {
            setError("");
        };
    };
    async function onSubmit() { //call api to validate user
        const url = `/api/user-validate?email=${details.email}&mode=${mode}&key=${details.pass}`;
        if (mode === "login") {
            const res = await fetch(url).catch(err => console.log(err));
            const data = await res.json().catch(err => console.log(err));
            if (data.exists) {
                router.push(`/notes?email=${details.email}&name=${data.name}`);
            } else {
                setError("Email or Password incorrect. Try again.");
                setDetails({ name: "", email: "", pass: "" });
            };
        };
        if (mode === "signup") {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(details)
            }).catch(err => console.log(err));
            const data = await res.json().catch(err => console.log(err));
            if (data.exists) {
                setError("Account already exists.");
            } else {
                if (data.created) {
                    router.push(`/notes?email=${details.email}&name=${details.name}`);
                }else{
                    setError("Server error, Try again");   
                }
            }
        };
    };

    return (
        <div>
            <Header />
            <LoginForm
                mode={mode}
                error={error}
                details={details}
                changeMode={changeMode}
                onChange={onChange}
                onSubmit={onSubmit} />
            <Footer />
        </div>
    );
};