import React from 'react';
import logo from '../svg/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';

const HeaderComponent = styled.div`
    .signin-btn{
        right:0;
        color: #fff;
        border:none;
        margin:1rem 2% 0;
        padding:0.4375rem 1.0625rem;
        font-weight:400;
        line-height:normal;
        border-radius:0.1875rem;
        font-size:1rem;
        background:var(--main-red);
        position:absolute;
        translate:transform(-50%,-50%);
        cursor:pointer;
        transition:background 0.2s ease-in;
        &:hover{
            background:var(--main-red-hover);
        }
    }

        /* Header Top */
        .header-top{
            position:relative;
            height:10rem;
            z-index:1;
            padding-top:20px;
            margin: 0 3.5rem;
        }

        /* Header Content */
        .header-content{
            width:65%;
            position:relative;;
            margin:8rem auto 0;
            display: flex;
            justify-content:center;
            align-content:center;
            text-align: center;
            flex-direction:column;
            z-index:1;
        }

        /* Main offer */

        .main-offer-btn{
            display:inline-block;
            background:var(--main-red);
            text-transform:uppercase;
            border:none;
            outline:none;
            margin:0 0%;
            padding:1rem;
            border-radius:0.1875rem;
            font-size:2rem;
            text-align:center;
            color: #fff;
            box-shadow:0 1px 0 rgba(0,0,0,0.45);
            transition: background 0.2s ease-in;
            cursor: pointer;
            &:hover{
                background:var(--main-red-hover);
            }
        }

        /* Icon */
        .Icon Svg{
            vertical-align:bottom;
            /* margin-left:1.5rem; */
            margin-top:-6px;
        }
`
const Logo = styled.img`
    width:10rem;
    height:3.5rem;
    position: absolute;
    top:40%;
    left:5%;
    transform:translate(-50%,-50%);
`
const Title = styled.h1`
    /* margin:0 0 1.2rem; */
    margin:0 9rem 1.2rem;
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.1em;
`

const SubTitle = styled.h2`
    font-weight:400;
    font-size:1.875rem;
    line-height:1.25em;
    margin: 0 0 1.875rem;
`

function Header() {
    return (
        <HeaderComponent className="header-container">
            <div className="header-top">
                <Logo src={logo} alt="Logo" />
                <button className="signin-btn">
                    Sign In
                </button>
            </div>
            <div className="header-content">
                <Title>
                    Unlimited movies, TV shows and more.
                </Title>
                <SubTitle>
                    Watch anywhere. Cancel anytime.
                </SubTitle>
                <div className="EmailDiv">
                    <input type="email" name="email" class="nfTextField" placeholder="Email address" value="" autocomplete="email" maxlength="50" minlength="5" />
                    <label className='main-offer-btn'>
                        TRY IT NOW
                    <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />
                    </label>
                </div>
            </div>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        </HeaderComponent>
    )
}

export default Header;
