import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Img1 from './assets/Img1.jpg';
import Img2 from './assets/Img2.jpg';
import Img3 from './assets/Img3.png';
import Google from './assets/google.svg';
import Apple from './assets/apple.svg';
import AmuLogo from './assets/amu-logo.svg';
import EyeIcon from './assets/eye.svg';
import EyeOffIcon from './assets/eye-off.svg';

const slides = [Img1, Img2, Img3];

function Login() {

    var _useState = useState(0);
    var currentSlide = _useState[0];
    var setCurrentSlide = _useState[1];

    var _useState2 = useState(false);
    var showPassword = _useState2[0];
    var setShowPassword = _useState2[1];

    useEffect(function () {
        var timer = setInterval(function () {
            setCurrentSlide(function (prev) {
                return (prev + 1) % slides.length;
            });
        }, 4000);

        return function () {
            clearInterval(timer);
        };
    }, []);

    return (
        <section className="auth-container">
            <div className="auth-card">

                {/* LEFT SIDE */}
                <div className="auth-left">

                    <div className="auth-top">
                        <img src={AmuLogo} alt="logo" className="auth-logo" />

                        <Link to="/" className="back-link">
                            Back to website →
                        </Link>
                    </div>

                    <div className="auth-image-box">
                        {slides.map(function (img, index) {
                            return (
                                <img
                                    key={index}
                                    src={img}
                                    alt="slide"
                                    className={
                                        "auth-image " + (index === currentSlide ? "active" : "")
                                    }
                                />
                            );
                        })}

                        <div className="auth-overlay">
                            <h3>
                                Capturing Moments,<br />
                                Creating Memories
                            </h3>

                            <div className="auth-dots">
                                {slides.map(function (_, index) {
                                    return (
                                        <span
                                            key={index}
                                            className={
                                                "auth-dot " + (index === currentSlide ? "active" : "")
                                            }
                                            onClick={function () {
                                                setCurrentSlide(index);
                                            }}
                                        ></span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="auth-right">
                    <div className="auth-form-box">

                        <h1>Welcome back</h1>

                        <p className="auth-subtext">
                            Don’t have an account?{" "}
                            <Link to="/auth" className="auth-link">
                                Sign up
                            </Link>
                        </p>

                        <input
                            type="email"
                            placeholder="Email"
                            className="auth-input"
                        />

                        <div className="password-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="auth-input"
                            />

                            <span
                                className="eye-icon"
                                onClick={function () {
                                    setShowPassword(!showPassword);
                                }}
                            >
                                <img
                                    src={showPassword ? EyeOffIcon : EyeIcon}
                                    alt="toggle"
                                />
                            </span>
                        </div>

                        <button className="auth-btn">
                            Sign in
                        </button>

                        <div className="auth-divider">
                            <span></span>
                            <p>Or sign in with</p>
                            <span></span>
                        </div>

                        <div className="auth-social">
                            <button>
                                <img src={Google} alt="Google" />
                                Google
                            </button>

                            <button>
                                <img src={Apple} alt="Apple" />
                                Apple
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Login;