import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Profile from './Profile';
import Kontak from './Kontak';
import Home from './Home';
import Portofolio from './Portofolio';
import Laravel from './portofolio/Laravel';
import Reactjs from './portofolio/Reactjs';
import AndroidStudio from './portofolio/AndroidStudio';
import Design from './portofolio/Design';
import Xml from './portofolio/Xml';
import AdobePremiere from './portofolio/AdobePremiere';
import AdobeAfterEffect from './portofolio/AdobeAfterEffect';
import Fotografi from './portofolio/Fotografi';
import Unity from './portofolio/Unity';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/kontak" component={Kontak}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/portofolio" component={Portofolio}/>
                <Route path="/laravel" component={Laravel}/>
                <Route path="/reactjs" component={Reactjs}/>
                <Route path="/android-studio" component={AndroidStudio}/>
                <Route path="/design" component={Design}/>
                <Route path="/xml" component={Xml}/>
                <Route path="/adobe-premiere" component={AdobePremiere}/>
                <Route path="/adobe-after-effect" component={AdobeAfterEffect}/>
                <Route path="/fotografi" component={Fotografi}/>
                <Route path="/unity" component={Unity}/>
            </Switch>
        );
    }
}

export default Main;
