import "./navBar.module.css";

export default function Navbar() {
    return (
        <nav>
            <p className="logo">ZENITH</p>
            <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="contact">CONTACT US</a></li>
                    <li><a href="/menu">MENU</a></li>
            </ul>
        </nav>
    )
};
