import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Register with Username: ${username}, Email: ${email}, and Password: ${password}`);

        setUsername('');
        setEmail('');
        setPassword('');
    }

    const handleGoogleLogin = () => {
        alert('Login with Google');
    }

    return (
        <div className="register-container">
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
            <div className="google-login">
                <button onClick={handleGoogleLogin} className="google-button">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google logo" />
                    Login with Google
                </button>
            </div>
        </div>
    );
}

export default RegisterForm;
