import './App.css';
import foto from '././image/foto.jpg'
import {Abouts, Contact} from './component'

function Services() {
  return (
    <div>

    <div className='imgtest'>
        <img className='imgsix' src='image\foto.jpg' alt=''/>
    </div>
      <div className='first'>
         <div>  <img className="lia" src={foto} alt=''/></div>
          <div className='ontop'>
            <div className='top'>hello</div>
            <div className='down'>hello</div>
          </div>
      </div>
      <Abouts/>
      <Contact/>
    </div>
  );
}

export default Services;
