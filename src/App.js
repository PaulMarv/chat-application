import React from 'react'
import './App.css';
import {ChatEngine} from 'react-chat-engine';
import {ChatFeed} from './components/ChatFeed';
import {LoginForm} from './components/LoginForm'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
            height = "100vh"
            projectID="e79e5711-cbfd-46f2-af67-2e6aab3b6803"
            userName= {localStorage.getItem('username')}
            userSecret= {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps)=><ChatFeed
                {...chatAppProps}
            />}
        />
    )
}

export default App
