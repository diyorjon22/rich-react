import './footer.css'
import logoo from '../../assets/images/logoo.png'

const Footer = () => {
    return <footer className='footer'>
        <div className='container'>
            <div className='footer-first'>
                <h1 className='footer-first__title'>Get updates from Richard</h1>
                <p className='footer-first__p'>New course alerts, discounts and free lessons</p>
                <form>
                    <input className='footer-first__inp' type="text" placeholder='Enter your email' />
                    <button className='footer-first__btn'>Subscribe</button>
                </form>
            </div>
            <div className='footer-second'>
                <img className='footer-second__img' src={logoo} alt="" />
                <nav className='footer-nav'>
                    <ul className='footer-ul'>
                        <li className='footer-ul__li'><a href="1">Email</a></li>
                        <li className='footer-ul__li'><a href="2">Instagram</a></li>
                        <li className='footer-ul__li'><a href="3">Facebook</a></li>
                        <li className='footer-ul__li'><a href="4">Twitter</a></li>
                        <li className='footer-ul__li'><a href="5">Image License Info</a></li>
                        <li className='footer-ul__li'><a href="6">Powered by Webflow</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
};
export default Footer;