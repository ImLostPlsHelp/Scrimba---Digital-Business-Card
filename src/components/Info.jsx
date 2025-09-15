import mauritsPhoto from "/src/assets/maurits.jpg"
import emailIcon from "/src/assets/Mail.png"
import linkedinIcon from "/src/assets/linkedin.png"

export default function Info() {
    return (
        <header>
            <img src={mauritsPhoto} alt="My Photo" className="my-photo"/>
            <section className="card">
                <h1>Maurits Sitinjak</h1>
                <p className="role">Fullstack Developer</p>
                <small>mywebsite.com</small>
                <nav className="contact-buttons">
                    <button className="email-button"><img src={emailIcon} alt="Email logo" />Email</button>
                    <button className="linkedin-button"><img src={linkedinIcon} alt="LinkedIn logo" />LinkedIn</button>
                </nav>
            </section>
        </header>
    )
}