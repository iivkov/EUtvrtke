import '../navbar.css'
// import fb from '../assets/facebook.svg';
import { FaFacebook } from 'react-icons/fa';

const Navbar = () => {

  const year = new Date().getFullYear();
  const handleClick = () => {
    window.open('https://osijek.hr', '_blank');
  }

  return (
    // <div className="footer">
    //   <div className="container">
    //     <p>&copy; {year} Sva prava pridržana.</p>
    //     <p>Sadržaj internetske stranice isključiva je odgovornost Logoipsum d.o.o.</p>
    //   </div>
    // </div>

    // <div style={{ textAlign: 'center' }}>
    <div className="footer">
      {/* <div style={{ display: 'flex', justifyContent: 'center' }}> */}
      <div className='container2'>
        {/* <div style={{ marginRight: '40px' }}> */}
        {/* <div className='address'>
          <p>Logoipsum d.o.o.</p>
          <p>Dalmatinska 17</p>
          <p>HR-31221 Josipovac</p>
        </div>
        <div className='address'>
          <p>+385 (0)31 353 225</p>
          <p>ivkovictransport@gmail.com</p>
          <a href="https://osijek.hr" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
            <FaFacebook size={30} style={{ cursor: 'pointer' }} />
          </a>
        </div> */}
      </div>
      <div className='copyright'>
        <p>&copy; {year}. Logoipsum d.o.o.</p>
        <p>+385 (0)31 353 225 | ivkovictransport@gmail.com | Facebook</p>
        <p>Sadržaj internetske stranice isključiva je odgovornost Logoipsum d.o.o.</p>
      </div>
    </div>
  )
}

export default Navbar