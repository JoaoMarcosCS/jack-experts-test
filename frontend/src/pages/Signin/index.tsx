import { useSignIn } from '../../auth/hooks/useSignIn';
import React, { useState } from 'react';

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {data, error, isLoading, mutate} = useSignIn();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        mutate({email, password});
    }   

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Sign In</button>
        </form>
    );
}