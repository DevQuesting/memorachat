// pages/login.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import apiClient from '../utils/apiClient';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await apiClient.post('/auth/login', { email, password });
            dispatch(setUser(response.data));
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div>
            <h1>Login to MemoraChat</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
