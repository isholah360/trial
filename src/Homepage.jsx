import './new.css';
import React, {useState, useEffect, useRef} from 'react'
import gsap from 'gsap'
import {Power3} from 'gsap'
// import Hamburger from './Hamburger'


function Home() {

  const inSide = useRef(null);
  const outSide = useRef(null);
  const inIt = useRef(null);
  const topIt = useRef(null);
  const top = useRef(null);
  const revOut = useRef(null);
  const revIn = useRef(null);
  const card = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);


  const [drop, setDrop] = useState(false);

  const [isplay, setIsplay] = useState(false);

  const carDisplay = ()=>{
    setIsplay(!isplay);
  }
  const dropClick = ()=>{
    setDrop(!drop)
  }
  useEffect(()=>{
    // gsap.to(["inside", "outside"], {
    //   duration: .8,
    //   height: "100",
    //   ease: Power3.inOut,
    //   stagger:{
    //     amount: 0.08,
    //   }
    // })
    if(isplay=== true){
      const el = inIt.current;
      gsap.to(el, {width:'80vw', duration:5})
      const els = topIt.current;
      gsap.to(els, {height:'100%', duration:5, delay: 5})
      const elz = top.current;
      gsap.fromTo(elz, {opacity:0}, {opacity:1, duration:3, delay: 10})}

    else if (isplay=== false) {
        const el = inIt.current;
        gsap.to(el, {width:'0vw', duration:5,  delay: 5})
        const els = topIt.current;
        gsap.to(els, {height:'0%', duration:5})
        const elz = top.current;
        gsap.fromTo(elz, {opacity:1}, {opacity:0, duration:3, delay: 10})}

    if (drop === true){
      gsap.fromTo([revOut.current, revIn.current], {height:0}, {height:'100%',
      duration:3, ease:Power3.inOut, transformOrigin:'top left', delay:0.5,
      stagger:{amount:0.2}, skewY:0.3})
    }
    else if (drop === false) {
      gsap.fromTo([revIn.current, revOut.current], {height:'100%'}, {height:'0',
      duration:3, ease:Power3.inOut, transformOrigin:'top left', delay:0.5,
      stagger:{amount:0.2}, skewY:0.05})
    }


     gsap.fromTo([card.current, card1.current, card2.current], {opacity:0, x:-25}, { opacity:1, x:25,
     duration:3, ease:Power3.inOut, transformOrigin:'left', delay:2,
     stagger:{amount:2}})

    // if(!isplay){
    //   const el = inIt.current;
    //   gsap.to(el, {width:'0vw', duration:5})
    //   const els = topIt.current;
    //   gsap.to(els, {height:'0%', duration:5, delay: 5})
    //   const elz = top.current;
    //   gsap.fromTo(elz, {opacity:0}, {opacity:'1', duration:3, delay: 10})
    // }



  }, [isplay, drop])

  const [name, setName] = useState('Menu');
  const [display, setDisplay] = useState(true);

  const handleIt = ()=>{
    setName(!name);
    setDisplay(!display);
  }



  return (
    <div>
      <div className='page'>
          <div className='theheader'>
              <div className='logo' >Logo</div>
              <button className='but' onClick={handleIt}>
              {name? "menu" : "close"}</button>
          </div>
          <div ref={outSide}className={display ? 'outside' : 'active'}>
                <div ref={inSide} className='inside'>
                  <div className='navigate'>
                      <section className='options'>
                          <ul>
                            <a href="/">Home</a>
                            <a  href="/">Services</a>
                            <a  href="/">About Us</a>
                          </ul>
                      </section>
                  </div>

                </div>
          </div>
      </div>

      <div className='imgtest'>
      hello
      </div>
          <div className='theback'>
            <div ref={inIt} className='background'>
              <div ref={topIt} className='backgroundz'>
                <p ref={top} className='tru'>heloo</p>
              </div>
            </div>
          </div>

          <button className='lat' onClick={carDisplay}>
          change</button>

          <div className='reveal'>
            <div ref={revOut} className='reveal-out'>
              <div ref={revIn} className='reveal-in'>
              <button onClick={dropClick}
              className='mymenu'>dropdown</button>
              </div>
            </div>
          </div>

          <div className='card-cont'>
            <div ref={card} className='card'></div>
            <div ref={card1} className='card1'></div>
            <div ref={card2} className='card2'></div>
          </div>


    </div>
  );
}

export default Home;
