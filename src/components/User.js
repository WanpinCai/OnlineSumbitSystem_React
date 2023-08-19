import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Register from "./Register";

function User() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="App">
            {
                currentForm === "login" ? <LoginForm onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
        </div>
    );
}

export default User;
