import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footerLogo">
                ✦ THE ARCANA ROOM
            </div>

            <div className="footerContent">

                <div className="footerColumn">
                    <div className="footerTitle">GO TO</div>

                    <Link to="/">HOME</Link>
                    <Link to="/reading-setup">READING</Link>
                    <Link to="/card-library">CARDS LIBRARY</Link>
                    <Link to="/about">ABOUT</Link>
                </div>

                <div className="footerColumn">
                    <div className="footerTitle">CONNECT</div>

                    <a
                        href="https://github.com/lakshaysaini0910/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GITHUB
                    </a>

                    <a
                        href="https://www.linkedin.com/in/lakshay-saini-056a20194/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LINKEDIN
                    </a>
                </div>

            </div>

            <div className="footerQuote">
                "The future is not fixed. The cards reveal possibilities."
            </div>

            <div className="footerBottom">
                © 2026 The Arcana Room · Made with ❤️ by Lakshay
            </div>

        </footer>
    )
}

export default Footer