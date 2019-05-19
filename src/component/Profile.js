import React, {Component} from 'react';
import MyImage from '../MyImage';
import MyTable from '../MyTable';
import '../App.css';

class Profile extends Component {
    render() {
        return (
            <div class="center">
                <h2>My Profile</h2>
                <MyTable/>
                <MyImage/>
            </div>
        );
    }
}

export default Profile;
