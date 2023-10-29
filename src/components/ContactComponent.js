// import React from 'react';

// const ContactComponent = () => {
//     return <div>Kontaktirajte nas...</div>;
// }

// export default ContactComponent;

// pages/about.js

import React, {useState} from "react";
import '../App.css';

const ContactComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Slanje poruke na mail
        const mailtoLink = `mailto:ivan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`E-mail: ${email}\n\nPoruka:\n${message}`)}`;
        window.location.href = mailtoLink;
    }

	return (
    // <div className="container">
    // <div className="text-component">
    //   <div className="box">
    //     <h1>Gdje se nalazimo?</h1>
    //   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11175.448100424936!2d18.71214685!3d45.55310105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7b31613bdd3%3A0x8486780d883c2ebb!2sMcDonald&#39;s%20Osijek%20Drinska!5e0!3m2!1shr!2shr!4v1698330931203!5m2!1shr!2shr" width="600" height="450" style={{border:0, allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade" }}></iframe>
    //   </div>
    //   <div className="spacer"></div>
    //   <div className="box">
    //   <form onSubmit={handleSubmit}>
    //         <div>
    //             <label htmlFor="email">E-pošta:</label>
    //             <input
    //                 type="email"
    //                 id="email"
    //                 placeholder="Unesite Vašu adresu e-pošte"
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 required
    //             />
    //         </div>
    //         <div>
    //             <label htmlFor="subject">Predmet:</label>
    //             <input
    //                 type="text"
    //                 id="subject"
    //                 placeholder="Unesite predmet poruke"
    //                 value={subject}
    //                 onChange={(e) => setSubject(e.target.value)}
    //                 required
    //             />
    //         </div>
    //         <div>
    //             <label htmlFor="message">Poruka:</label>
    //             <textarea
    //                 id="message"
    //                 placeholder="Unesite sadržaj svoje poruke"
    //                 value={message}
    //                 onChange={(e) => setMessage(e.target.value)}
    //                 rows="4"
    //                 required
    //             ></textarea>
    //         </div>
    //         <button type="submit">Pošalji</button>
    //     </form>
    //   </div>
    // </div>

    <div className="text-component">
        <h1>Kontakt</h1>
        <p>Javite nam se s povjerenjem!</p>
        {/* <div className="container">
            <div className="box">
            <form class="contact" onSubmit={handleSubmit}>
            <div>
                 <label style={{display: "block"}} htmlFor="name">Ime i prezime:</label>
                 <input
                    type="text"
                    id="name"
                    placeholder="Unesite svoje ime i prezime"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
             <div>
                 <label style={{display: "block"}} htmlFor="email">E-pošta:</label>
                 <input
                    type="email"
                    id="email"
                    placeholder="Unesite svoju adresu e-pošte"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label style={{display: "block"}} htmlFor="subject">Predmet:</label>
                <input
                    type="text"
                    id="subject"
                    placeholder="Unesite predmet poruke"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
            </div>
            <div>
                <label style={{display: "block"}} htmlFor="message">Poruka:</label>
                <textarea
                    id="message"
                    placeholder="Napišite svoju poruku"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="10"
                    required
                ></textarea>
            </div>
            <button type="submit">Pošalji</button>
        </form>
            </div>
            <div className="box">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11175.448100424936!2d18.71214685!3d45.55310105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7b31613bdd3%3A0x8486780d883c2ebb!2sMcDonald&#39;s%20Osijek%20Drinska!5e0!3m2!1shr!2shr!4v1698330931203!5m2!1shr!2shr" width="500" height="400" style={{border:0, allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade" }}></iframe>
            </div>
        </div> */}

<div className="container">
{/* <div> */}

<div className="box">
<form class="contact" onSubmit={handleSubmit}>
            <div>
                 <label style={{display: "block"}} htmlFor="name">Ime i prezime:</label>
                 <input
                    type="text"
                    id="name"
                    placeholder="Unesite svoje ime i prezime"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
             <div>
                 <label style={{display: "block"}} htmlFor="email">E-pošta:</label>
                 <input
                    type="email"
                    id="email"
                    placeholder="Unesite svoju adresu e-pošte"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label style={{display: "block"}} htmlFor="subject">Predmet:</label>
                <input
                    type="text"
                    id="subject"
                    placeholder="Unesite predmet poruke"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
            </div>
            <div>
                <label style={{display: "block"}} htmlFor="message">Poruka:</label>
                <textarea
                    id="message"
                    placeholder="Napišite svoju poruku"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="8"
                    required
                ></textarea>
            </div>
            <button type="submit">Pošalji</button>
        </form>
        </div>
        <div className="box">
            {/* <p>
            Ima prepoznatljivi oblik stiliziranog štita, a u njegovom središnjem dijelu naglašen je most na tri luka preko rijeke Drave koja je jedan od dugovječnih osječkih simbola. Na sredini toga mosta uzdiže se pravokutna kula s tri kruništa, s dva pravokutna prozora i jednim vratima. Iznad je horizontalni natpis NK Osijek ispisan velikim štampanim slovima. 
            </p> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11175.448100424936!2d18.71214685!3d45.55310105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7b31613bdd3%3A0x8486780d883c2ebb!2sMcDonald&#39;s%20Osijek%20Drinska!5e0!3m2!1shr!2shr!4v1698330931203!5m2!1shr!2shr" width="500" height="400" style={{border:0, allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade" }}></iframe>
        </div>
    </div>
    </div>
//  </div>
        
	);
};

export default ContactComponent;
