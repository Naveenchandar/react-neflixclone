import React from 'react';
import styled from 'styled-components';

function Footer() {
    const Footerul1 = styled.div`
        padding: 45px 99px;
        color: #757575;
        font-size: 1em;

        .ulItems{
            display: flex;
            justify-content:center;
        }

        p{
            text-align:center;
            margin: 0 0 30px;
        }

        a{
            color:#757575;
            &:hover{
                color: #757575;
            }
        }

        .ulItems ul{
            list-style-type: none;
        }
        .ulItems ul li{
            padding: 0;
            margin-bottom: 16px;
            padding-right: 12px;
        }
    `
    return (
        <Footerul1>
            <p>
                Questions? <a className="footer-top-a" href="tel:000-800-040-1843">000-800-040-1843</a>
            </p>
            <div className="ulItems">
                <div className="footerul1">
                    <ul>
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                </div>
                <div className="footerul2">
                    <ul>
                        <li>Help Centre</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                        <li>Legal Notices</li>
                    </ul>
                </div>
                <div className="footerul3">
                    <ul>
                        <li>Account</li>
                        <li>Ways to Watch</li>
                        <li>Corporate Information</li>
                        <li>Netflix Originals</li>
                    </ul>
                </div>
                <div className="footerul4">
                    <ul>
                        <li>Media Centre</li>
                        <li>Terms of Use</li>
                        <li>Corporate Information</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </Footerul1>
    )
}

export default Footer;