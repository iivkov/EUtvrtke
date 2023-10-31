import React, {useState} from "react";
import '../App.css';

const ContactComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoLink = `mailto:ivan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`E-mail: ${email}\n\nPoruka:\n${message}`)}`;
        window.location.href = mailtoLink;
    }

	return (
    <div className="main_content">
        <h1>Kontakt</h1>
        <p>Javite nam se s povjerenjem!</p>
        <div className="container">
        {/* <div> */}
            <div className="box">
                <form class="contact" onSubmit={handleSubmit}>
                    <div>
                        <label style={{display: "block"}} htmlFor="name">Ime i prezime:</label>
                        <input type="text" id="name" placeholder="Unesite svoje ime i prezime" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label style={{display: "block"}} htmlFor="email">E-pošta:</label>
                        <input type="email" id="email" placeholder="Unesite svoju adresu e-pošte" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label style={{display: "block"}} htmlFor="subject">Predmet:</label>
                        <input type="text" id="subject" placeholder="Unesite predmet poruke" value={subject} onChange={(e) => setSubject(e.target.value)} required/>
                    </div>
                    <div>
                        <label style={{display: "block"}} htmlFor="message">Poruka:</label>
                        <textarea id="message" placeholder="Napišite svoju poruku" value={message} onChange={(e) => setMessage(e.target.value)} rows="8" required ></textarea>
                    </div>
                    <button className="submit_button" type="submit">Pošalji</button>
                </form>
            </div>
        {/* <div className="spacer"></div> */}
            <div className="box">
                <iframe title="Lokacija" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5587.351886069733!2d18.68716246586954!3d45.55684407655209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7b9c3d3213d%3A0x43b5fc47f7e90641!2sFaculty%20of%20Electrical%20Engineering%2C%20Computer%20Science%20and%20Information%20Technology%20Osijek%20(FERIT%20Osijek)%20-%20Kneza%20Trpimira%202B!5e0!3m2!1shr!2shr!4v1698771443271!5m2!1shr!2shr" width="500" height="400" style={{border: 0, allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade"}}></iframe>
            </div>
        </div>
    </div>
//  </div>   
	);
};

export default ContactComponent;