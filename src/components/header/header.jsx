import './header.css'
import logo from '../../assets/images/logo.png'
import rasm from '../../assets/images/nav.png'


const Header = () => {
return <header className="header">
    <div className="container">
        <nav className='hero-nav'>
            <img src={logo} alt="" />
            <ul className='hero-ul'>
                <li className='hero-ul__li'><a href="1">About</a></li>
                <li className='hero-ul__li'><a href="2">Features</a></li>
                <li className='hero-ul__li'><a href="3">How to Use</a></li>
                <li className='hero-ul__li'><a href="4">Download</a></li>
            </ul>
        </nav>
        <div className='wrapper'>
            <div className='wrapper-text'>
                <h1 className='wrapper-text__title'>Momentum</h1>
                <p className='wrapper-text__p'>Launch your product — and savor the momentum.</p>
                <button className='wrapper-text__btn'>Get the App</button>
            </div>
            <div className='wrapper-img'>
                <img src={rasm}  alt="" />
            </div>
        </div>
    </div>
</header>;
};

export default Header;
