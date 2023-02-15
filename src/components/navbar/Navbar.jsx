import "./Navbar.css"

function Navbar() {
    return (
        <div class="navbar">
            <div className="navContainer">
                <h2 className="logo">Bookster</h2>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;