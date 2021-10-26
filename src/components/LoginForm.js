import React, { useState } from 'react';
import axios from 'axios';

export const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const authObject = { 'Project-ID':"e79e5711-cbfd-46f2-af67-2e6aab3b6803", 'User-Name':username, 'User-Secret':password }
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject})
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
        } catch (error) {
            setError("Oops! Login detail invalid")
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type= 'text' value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder ='Username' required/>
                    <input type= 'password' value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder ='Password' required/>
                    <div align="center">
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}
 