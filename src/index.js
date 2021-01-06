import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
        {id: 1, name: 'Olga'},
        {id: 2, name: 'Polina'},
        {id: 3, name: 'Mihail'},
        {id: 4, name: 'Max'}
    ]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'Bi'},
    {id: 4, message: 'Wou'}
]
let posts = [
    {id: 1, message: 'Hi, how are you?', likeCounts: 15},
    {id: 2, message: 'It"s my first post', likeCounts: 20},
    {id: 3, message: 'My name is Wasily', likeCounts: 5},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
