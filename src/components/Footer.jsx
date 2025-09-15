import twitterIcon from '../assets/Twitter icon.png';
import facebookIcon from '../assets/Facebook icon.png';
import instagramIcon from '../assets/Instagram icon.png';
import githubIcon from '../assets/GitHub icon.png';

export default function Footer() {
    return (
        <footer>
            <nav className="social-icons">
                <img src={twitterIcon} alt="Twitter" />
                <img src={facebookIcon} alt="Facebook" />
                <img src={instagramIcon} alt="Instagram" />
                <img src={githubIcon} alt="Github" />
            </nav>
        </footer>
    )
}