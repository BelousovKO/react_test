import './App.css';
import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Nav/>
            <div className={'app-wrapper-content'}>
                {/*<Profile/>*/}
                <Dialogs/>
            </div>
        </div>
    );
}

export default App;
