import '../App.css'
// import fb from '../assets/facebook.svg';
// import { FaFacebook } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
  <div className="footer">
  {/* <div className={`footer ${grayscale ? 'grayscale' : ''} ${highContrast ? 'high-contrast' : ''}`}> */}
    <div className='copyright'>
      <p className="p-footer">
        <a href="https://www.facebook.com/medogrupa" className="fb-icon">
          <FontAwesomeIcon icon={faFacebook} size="2x"/>
        </a>
      </p>
      <p className="p-footer">&copy; {year}. Logoipsum d.o.o.</p>
      <p className="p-footer">+385 (0)98 907 5667 | ivan.ivkovic@ferit.hr</p>
      <p className="p-footer">Sadržaj internetske stranice isključiva je odgovornost Logoipsum d.o.o.</p>
    </div>
  </div>
  )
}

export default Footer