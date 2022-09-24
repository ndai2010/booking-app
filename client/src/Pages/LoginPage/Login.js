
import "./Login.scss";
import faceicon from '../../assets/facebook.png'
import twiticon from '../../assets/twitter.png'
import googleicon from '../../assets/google-plus.png'

import { useContext, useState, useEffect } from "react";
import { AuthProvider } from "../../Context/AuthReducer";
import loginApi from "../../Api/LoginAPI";
const Login = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const handleChangePassword = (e) => {
        setPassword(e)
    };
    const handleChangeEmail = (e) => {
        setEmail(e)
    };

    const handleClick = async (e) => {
        e.preventDefault();
        console.log({ email, password });
        try {
            const res = await loginApi.Login({ email, password });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="login">
            <div className="login-content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 login-contents">
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <div className="form-block">
                                        <div className="mb-4">
                                            <h3>Sign In</h3>
                                        </div>
                                        <form onSubmit={handleClick}>
                                            <div className="form-group first">
                                                <label for="username">Username</label>
                                                <input
                                                    onChange={(e) => handleChangeEmail(e.target.value)} type="text"
                                                    className="form-control"
                                                    id="username"
                                                    required
                                                    value={email}
                                                />
                                            </div>
                                            <div className="form-group last mb-4">
                                                <label for="password">Password</label>
                                                <input
                                                    onChange={(e) => handleChangePassword(e.target.value)} type="password"
                                                    className="form-control"
                                                    id="password"
                                                    required
                                                    value={password}
                                                />
                                            </div>
                                            <div className="forget-remem-box d-flex mb-5 align-items-center justify-content-between">
                                                <div className="check-rememer">
                                                    <input className="check-input" type={"checkbox"}></input>
                                                    <span>Remember me</span>
                                                </div>
                                                <span className="forgot-pass">Forgot Password</span>
                                            </div>
                                            <div className="sign-up">
                                                <span>Sign up</span>
                                            </div>
                                            <input type="submit" value="Log In" className="btn btn-pill text-white btn-block btn-primary" />

                                            <span className="d-block text-center my-4 text-muted"> or sign in with</span>
                                            <div className="social-login text-center gap-5">
                                                <img style={{ margin: "0 10px", cursor: "pointer" }} src={faceicon} width="50px" height="50px" alt=""></img>
                                                <img style={{ margin: "0 10px", cursor: "pointer" }} src={twiticon} width="50px" height="50px" alt=""></img>
                                                <img style={{ margin: "0 10px", cursor: "pointer" }} src={googleicon} width="50px" height="50px" alt=""></img>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;