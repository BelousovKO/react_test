import './App.css';
import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

const App = (props) => {

    let dialogs = props.dialogs;
    let messages = props.messages;
    let posts = props.posts;

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Nav/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={ () => <Profile posts={posts}/>}/>
                    <Route path={'/dialogs'} render={ () => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                    <Route path={'/news'} render={ () => <News/>}/>
                    <Route path={'/music'} render={ () => <Music/>}/>
                    <Route path={'/settings'} render={ () => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
