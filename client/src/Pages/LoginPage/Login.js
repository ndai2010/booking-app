import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthReducer";
import "./Login.scss";
import faceicon from '../../assets/facebook.png'
import twiticon from '../../assets/twitter.png'
import googleicon from '../../assets/google-plus.png'
const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };


    return (
        <div className="login">
            <div className="content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 contents">
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <div className="form-block">
                                        <div class="mb-4">
                                            <h3>Sign In</h3>
                                        </div>
                                        <form>
                                            <div class="form-group first">
                                                <label for="username">Username</label>
                                                <input type="text" class="form-control" id="username" />
                                            </div>
                                            <div class="form-group last mb-4">
                                                <label for="password">Password</label>
                                                <input type="password" class="form-control" id="password" />
                                            </div>
                                            <div class="forget-remem-box d-flex mb-5 align-items-center justify-content-between">
                                                <div className="check-rememer">
                                                    <input className="check-input" type={"checkbox"}></input>
                                                    <span>Remember me</span>
                                                </div>
                                                <span class="forgot-pass">Forgot Password</span>
                                            </div>
                                            <input type="submit" value="Log In" class="btn btn-pill text-white btn-block btn-primary" />
                                            <div className="sign-up">
                                                <span>Sign up</span></div>
                                            <span class="d-block text-center my-4 text-muted"> or sign in with</span>
                                            <div class="social-login text-center gap-5">
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