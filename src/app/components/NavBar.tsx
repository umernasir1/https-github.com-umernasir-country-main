import Link from "next/link";

export default function NavBarPage() {
    return (
        <nav style={navStyle}>
            <Link href="/" style={linkStyle}>Home</Link>
            <span style={separatorStyle}>|</span>
            <Link href="/aboutus" style={linkStyle}>About Us</Link>
            <span style={separatorStyle}>|</span>
            <Link href="/contactus" style={linkStyle}>Contact Us</Link>
            <span style={separatorStyle}>|</span>
            <Link href="/country" style={linkStyle}>Country</Link>
        </nav>
    );
}

const navStyle = {
    padding: '10px 20px',
    backgroundColor: '#282c34',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif'
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '18px',
    fontWeight: 'bold',
};

const separatorStyle = {
    color: 'white',
    margin: '0 10px'
};
