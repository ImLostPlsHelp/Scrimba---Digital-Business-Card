import twitterIcon from '/src/assets/Twitter Icon.png';
import facebookIcon from '/src/assets/Facebook Icon.png';
import instagramIcon from '/src/assets/Instagram Icon.png';
import githubIcon from '/src/assets/Github Icon.png';

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