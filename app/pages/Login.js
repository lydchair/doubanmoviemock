import React from 'react';
import { connect } from 'react-redux';

import Nav from '../components/Nav/Nav';

import '../css/login.css';

class Login extends React.Component {
    render(){
        return <div className="login">
        <div className="page-body">
            <form className="login-form">
                <div className="username">
                    <input className="ipt" type="text" placeholder="Username" />
                </div>
                <div className="password">
                    <input className="ipt" type="text"  placeholder="Password" />
                </div>
                <div className="login-submit">
                    <button className="btn" type="button" name="button">Login</button>
                </div>
            </form>
        </div>
        <Nav />
        </div>
    }
}

function selectState(state) {
    return {
        state: state.login
    }
}
export default connect(selectState)(Login);
