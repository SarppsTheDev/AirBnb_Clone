import '../App.css'
import logo from '../images/airbnb-logo.png'

function Navbar(props) {
    return (
        <nav>
            <img src={logo} className="nav--logo" />
        </nav>
    )
}

export default Navbar