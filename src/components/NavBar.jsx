import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <div className="navbar-item">
                    <Link href="/">LLD</Link>
                </div>
            </div>
            <div className="navbar-items">
                <div className="navbar-item">
                    <Link href="/">Shawn</Link>
                </div>
                <div className="navbar-item">
                    <Link href="/x">X</Link>
                </div>
                <div className="navbar-item">
                    <Link href="/github">GItHub</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
