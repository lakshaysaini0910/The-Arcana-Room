import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <>
            <nav className="navbar">

                <Link to="/" className="navLogo">
                    THE ARCANA ROOM
                </Link>

                <div className="desktopNav">
                    <Link to="/">HOME</Link>
                    <Link to="/reading-setup">READING</Link>
                    <Link to="/card-library">CARDS LIBRARY</Link>
                    <Link to="/about">ABOUT</Link>
                </div>

                <button
                    className="menuButton"
                    onClick={() => setMenuOpen(true)}
                >
                    ☰
                </button>

            </nav>

            <div
                className={`sidebarOverlay ${menuOpen ? "active" : ""}`}
                onClick={closeMenu}
            ></div>

            <aside className={`mobileSidebar ${menuOpen ? "open" : ""}`}>

                <div className="sidebarHeader">
                    <span>MENU</span>

                    <button onClick={closeMenu}>
                        ×
                    </button>
                </div>

                <div className="sidebarLinks">

                    <Link to="/" onClick={closeMenu}>
                        <span>✦</span>
                        HOME
                    </Link>

                    <Link to="/reading-setup" onClick={closeMenu}>
                        <span>☽</span>
                        READING
                    </Link>

                    <Link to="/card-library" onClick={closeMenu}>
                        <span>✧</span>
                        CARDS LIBRARY
                    </Link>

                    <Link to="/about" onClick={closeMenu}>
                        <span>◇</span>
                        ABOUT
                    </Link>

                </div>

                <div className="sidebarFooter">
                    THE ARCANA ROOM
                </div>

            </aside>
        </>
    )
}

export default Navbar