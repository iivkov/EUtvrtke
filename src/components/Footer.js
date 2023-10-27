import '../navbar.css'

const Navbar = () => {

  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="container">
        <p>&copy; {year} Sva prava pridržana.</p>
        <p>Sadržaj internetske stranice isključiva je odgovornost Logoipsum d.o.o.</p>
      </div>
    </div>
  )
}

export default Navbar