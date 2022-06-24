import {FaUtensilSpoon} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './nav.css'
function Navbar(){
return(<div className='navWrapper'>
    <h1 className='navname'><Link to="/" style={{color:"black",textDecoration:"none"}}> BlendWithYummies <FaUtensilSpoon className='logo1' style={{color:"blue"}}/><FaUtensilSpoon className='logo2'  style={{color:"red"}}/></Link>
       </h1>
</div>)
}
export default Navbar;