import React, {Component} from 'react';
import './User.css';

class UserComponent extends Component {
    render() {
        let {user} = this.props;
        return (
                <div className={'forUser'}>{user.id}, {user.name}, {user.age}, {user.status.toString()}, {user.address.city}</div>
        );
    }
}

export default UserComponent;