import twitterIcon from "../assets/Twitter Icon.png" //Harus pakai import biar nanti pas build biar vite bisa handle pathnya
import facebookIcon from "../assets/Facebook Icon.png"
import instagramIcon from "../assets/Instagram Icon.png"
import githubIcon from "../assets/Github Icon.png"

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