
import "./Login.scss";
import faceicon from '../../assets/facebook.png'
import twiticon from '../../assets/twitter.png'
import googleicon from '../../assets/google-plus.png'

import { useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { fatchLoginAuthRequest } from '../../Redux/Actions/Actions'
import { useLocation, useNavigate } from 'react-router-dom'
const Login = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [userName, setUserName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [gender, setGender] = useState('')
    const [country, setCountry] = useState('')
    const [isRegister, setIsRegister] = useState(false)

    const AuthLogin = useSelector(state => state.loginReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (e, id) => {
        switch (id) {
            case 'email':
                setEmail(e)
                break
            case 'password':
                setPassword(e)
                break
            case 'city':
                setCity(e)
                break
            case 'phone':
                setPhone(e)
                break
            case 'userName':
                setUserName(e)
                break
            case 'country':
                setCountry(e)
                break
            case 'gender':
                setGender(e)
                break
            case 'avatar':
                setAvatar(e)
                break
            default:
                break;
        }
    };

    useEffect(() => {
        if (AuthLogin.Response.token && AuthLogin.isAdmin === true) {
            navigate('/admin')
        }
        else if (AuthLogin.Response.token && !AuthLogin.isAdmin) {
            navigate('/')
        }
    }, [AuthLogin])
    const login = async () => {
        dispatch(fatchLoginAuthRequest(email, password));

        // if (res.errCode === 0) {
        //     setEmail('')
        //     setPassword('')

        // } else {
        //     setPassword('')
        //     toast.error(res.message)
        // }
    }
    const register = async () => {
        try {
            // const res = await loginApi.Register(
            //     { email, password, userName, phone, gender, avatar, country, city });
            // console.log(res);
            setEmail('')
            setPassword('')
            setCity('')
            setPhone('')
            setUserName('')
            setCountry('')
            setGender('')
            setAvatar('')
            // if (res.errCode === 0) {
            //     setIsRegister(false)
            // } else {
            //     toast.error(res.message)
            // }
        } catch (error) {
            console.log(error);
        }

    }
    const handleClick = (e, id) => {
        e.preventDefault();
        id === 'login' ? login() : register()
    };
    return (
        <div className="login">
            <ToastContainer />
            <div className="login-content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 login-contents">
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <div className="form-block">

                                        <div className="mb-4 pb-4">
                                            <h3>{isRegister ? 'Sign up' : 'Sign in'}</h3>
                                        </div>
                                        {
                                            !isRegister ? (
                                                <form onSubmit={(e) => handleClick(e, 'login')}>
                                                    <div className="form-group">
                                                        <input
                                                            placeholder=" "
                                                            onChange={(e) => handleChange(e.target.value, 'email')} type="email"
                                                            className="form-control"
                                                            id="email"
                                                            required
                                                            value={email}
                                                        />
                                                        <label for="username">Email</label>

                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            placeholder=" "
                                                            onChange={(e) => handleChange(e.target.value, 'password')} type="password"
                                                            className="form-control"
                                                            id="password"
                                                            required
                                                            value={password}
                                                        />
                                                        <label for="password">Password</label>
                                                    </div>
                                                    <div className="forget-remem-box d-flex mb-5 align-items-center justify-content-between">
                                                        <div className="check-rememer">
                                                            <input placeholder=" " className="check-input" type={"checkbox"}></input>
                                                            <span>Remember me</span>
                                                        </div>
                                                        <span className="forgot-pass">Forgot Password</span>
                                                    </div>
                                                    <div className="sign-up" onClick={() => setIsRegister(true)}>
                                                        <span>Sign up</span>
                                                    </div>
                                                    <input placeholder=" " type="submit" value="Log In" className="btn btn-pill text-white btn-block btn-primary" />

                                                    <span className="d-block text-center my-4 text-muted"> or sign in with</span>
                                                    <div className="social-login text-center gap-5">
                                                        <img style={{ margin: "0 10px", cursor: "pointer" }} src={faceicon} width="50px" height="50px" alt=""></img>
                                                        <img style={{ margin: "0 10px", cursor: "pointer" }} src={twiticon} width="50px" height="50px" alt=""></img>
                                                        <img style={{ margin: "0 10px", cursor: "pointer" }} src={googleicon} width="50px" height="50px" alt=""></img>
                                                    </div>
                                                </form>
                                            ) : (
                                                <form onSubmit={(e) => handleClick(e, 'register')}>
                                                    <div className="form-group">
                                                        <input
                                                            placeholder=" "
                                                            onChange={(e) => handleChange(e.target.value, 'userName')} type="text"
                                                            className="form-control"
                                                            id="userName"
                                                            required
                                                            value={userName}
                                                        />
                                                        <label for="username">User name</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            placeholder=" "
                                                            onChange={(e) => handleChange(e.target.value, 'email')} type="email"
                                                            className="form-control"
                                                            id="email"
                                                            required
                                                            value={email}
                                                        />
                                                        <label for="username">Email</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            placeholder=" "
                                                            onChange={(e) => handleChange(e.target.value, 'password')} type="password"
                                                            className="form-control"
                                                            id="password"
                                                            required
                                                            value={password}
                                                        />
                                                        <label for="password">Password</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            placeholder=" "
                                                            onChange={(e) => handleChange(e.target.value, 'country')} type={'text'}
                                                            className="form-control"
                                                            id="country"
                                                            required
                                                            value={country}
                                                        />
                                                        <label for="country">Country</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            placeholder=" "
                                                            onChange={(e) => handleChange(e.target.value, 'city')} type={'text'}
                                                            className="form-control"
                                                            id="city"
                                                            required
                                                            value={city}
                                                        />
                                                        <label for="city">City</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            placeholder=" "
                                                            onChange={(e) => handleChange(e.target.value, 'phone')} type="tel"
                                                            className="form-control"
                                                            id="phone"
                                                            required
                                                            value={phone}
                                                        />
                                                        <label for="phone">Phone</label>
                                                    </div>
                                                    <div className="select-group d-flex">
                                                        <div className="select-gender col-md-5">
                                                            <select required value={gender} onChange={(e) => handleChange(e.target.value, 'gender')} id="gender" className="form-control">
                                                                <option value=''>Choose...</option>
                                                                <option value='male'>Male</option>
                                                                <option value='female'>Female</option>
                                                            </select>
                                                            <label for="gender">Gender</label>
                                                        </div>
                                                        <div className="input-img col-md-5">
                                                            <input
                                                                placeholder=" "
                                                                type={"file"}
                                                                className="form-control"
                                                                id="image"
                                                                required
                                                                onChange={(e) => handleChange(e.target.value, 'avatar')}
                                                                value={avatar}
                                                            />
                                                            <label for="image">Avatar</label>
                                                        </div>
                                                    </div>

                                                    <div className="sign-up" onClick={() => setIsRegister(false)}>
                                                        <span>Sign In</span>
                                                    </div>
                                                    <input placeholder=" " type="submit" value="Register" className="btn btn-pill text-white btn-block btn-primary" />
                                                    <span className="d-block text-center my-4 text-muted"> or sign up with</span>
                                                    <div className="social-login text-center gap-5">
                                                        <img style={{ margin: "0 10px", cursor: "pointer" }} src={faceicon} width="50px" height="50px" alt=""></img>
                                                        <img style={{ margin: "0 10px", cursor: "pointer" }} src={twiticon} width="50px" height="50px" alt=""></img>
                                                        <img style={{ margin: "0 10px", cursor: "pointer" }} src={googleicon} width="50px" height="50px" alt=""></img>
                                                    </div>
                                                </form>)
                                        }

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