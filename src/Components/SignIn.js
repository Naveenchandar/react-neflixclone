import React from 'react';
import styled from 'styled-components';
import logo from '../svg/logo.svg';

function SignIn() {
    const SignIn = styled.div`
    margin: 0 auto -236px;
    min-height: 100vh;
    background-color: transparent;
    max-width: 450px;
    position: relative;
    z-index:1;
        .formdiv{
        background: rgba(0,0,0,.75);
        padding: 60px 68px 40px;
        margin-bottom: 90px;
        }
        .signinform-btn{
        color: #fff;
        border:none;
        margin:1rem 2% 0;
        padding:0.4375rem 1.0625rem;
        font-weight:400;
        width:100%;
        margin-left:0px;
        line-height:normal;
        border-radius:0.1875rem;
        font-size:1rem;
        background:var(--main-red);
        cursor:pointer;
        transition:background 0.2s ease-in;
        &:hover{
            background:var(--main-red-hover);
        }
    }
    .formdiv input[type=text],.formdiv input[type=password]{
        border-radius: 4px;
        border: 0;
        color: #fff;
        height: 50px;
        line-height: 50px;
        padding: 16px 20px 0;
        background:#333;
        margin-bottom:16px;
        width: 300px;
    }
    .SignIn::before{
        content: "";
        height: 91px;
        display: block;
    }
    .signin-div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .formdiv h1{
        color: #fff;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 28px;
    }
    .formdiv input[type=checkbox]{
        position: absolute;
        top: 25.75em;
    }
    .formdiv input[type=checkbox]+label{
        display: block;
        position: relative;
        left: 20px;
        top: 9px;
        font-size: 14px;
    }
    .helper{
        display:flex;
        justify-content:space-between;
    }
    .helper a{
        font-size: 14px;
        padding-top: 9px;
    }
    `
    const SignLogo = styled.img`
        width:100%;
        height:2.5rem;
        position: absolute;
        top:0%;
        left:0%;
        transform: translate(-42%,50%);
        z-index: 1;

    `
    return (
        <section className="header-container">
            <div className="header-top">
                <SignLogo src={logo} alt="Logo" />
            </div>
            <SignIn>
                <div className="SignIn">
                    <div className="formdiv">
                        <h1>Sign In</h1>
                        <div className="signin-div">
                            <form>
                                <input type="text" placeholder="Email or phone number"/><br />
                                <input type="password" placeholder="Password"/><br />
                                <button className="signinform-btn">
                                    Sign In
                        </button>
                                <br />
                                <div className="helper">
                                    <input type="checkbox" checked={true} /><label>Remember me</label>
                                    <a href="#">Need help?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </SignIn>
        </section>
    )
}
export default SignIn;
