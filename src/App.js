import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Main from "./component/Main";
import MyAppBar from "./MyAppBar";

class App extends Component {
    render() {
        return (
            <div>
                <MyAppBar/>
                <Main/>
            </div>
        );
    }
}

export default App;
