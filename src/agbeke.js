import { useState } from "react";
import { Link } from "react-router-dom";
import './App.css'

import { FaBars, FaTimes} from 'react-icons/fa'


const Agbeke = () => {

    const [menuLinks, setMenuLinks] = useState(false)
    const handleBar = ()=>{

    }
    return (
        <div className="navs">
            <nav>
               <div className="logo"><Link to="/"> <h2>Logo</h2></Link></div>
                <div className="links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Services">Services</Link></li>
                        <div className='unique'>
                            <li><Link to="/About">About</Link></li>
                            <div className='sub-menu'>
                                <ul>
                                  <li>cleaning</li>
                                  <li>cleaning</li>
                                  <li>cleaning</li>
                                </ul>

                            </div>
                        </div>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="bars">
                    { menuLinks ?
                    <FaTimes color="black" size={27} onClick={ ()=>{ setMenuLinks= 'False'}}/>:
                    <FaBars color="black" size={27} onClick={ ()=>{ setMenuLinks= 'True'}}/>

                    }
                </div>
            </nav>
        </div>
     );
}

export default Agbeke;
