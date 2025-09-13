export default function Info() {
    return (
        <header>
            <img src="/src/assets/maurits.jpg" alt="My Photo" className="my-photo"/>
            <section className="card">
                <h1>Maurits Sitinjak</h1>
                <p className="role">Fullstack Developer</p>
                <small>mywebsite.com</small>
                <nav className="contact-buttons">
                    <button className="email-button"><img src="/src/assets/Mail.png" alt="Email logo" />Email</button>
                    <button className="linkedin-button"><img src="/src/assets/linkedin.png" alt="LinkedIn logo" />LinkedIn</button>
                </nav>
            </section>
        </header>
    )
}