import React, { Component } from 'react'

import {showAlertLogin, showAlertWrongCred} from './redux/index'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';



class Login extends Component {

        constructor(props){
            super(props)
            this.emailRef = React.createRef()
            this.passwordRef = React.createRef()
        }

    logMeIn = () => {
        let iemail = this.emailRef.current.value
        let ipass = this.passwordRef.current.value

        if(iemail == "dev@mail.com" && ipass == "devpassword"){
            this.props.showAlertLogin();
            localStorage.setItem("Auth", true);
            window.location.href="/"
        }else {
            this.props.showAlertWrongCred()
        }
    }



    render(){


        if(localStorage.getItem("Auth")=="true"){
            window.location.href = "/"
        }

        return(
            
                <div className="loginPage">
                    <div class="inputBox">
                        <div className="innerBox">
                            <input placeholder="Email" ref={this.emailRef} type="email"/>
                            <input placeholder="Password" ref={this.passwordRef} type="password"/>
                            <button onClick={this.logMeIn}>Login</button>
                        </div>
                    </div>
                </div>

        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        showAlertLogin : () => dispatch(showAlertLogin()),
        showAlertWrongCred : () => dispatch(showAlertWrongCred())
    }
}

Login.propTypes = {
    showAlertLogin : PropTypes.func,
    showAlertWrongCred : PropTypes.func
    
}


export default connect(
 null,  mapDispatchToProps
)(Login);