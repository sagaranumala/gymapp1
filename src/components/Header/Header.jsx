import React,{useState} from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'

function Header() {
  const mobile=window.innerWidth<=768 ? true :false;
  const [menuOpened,setMenuOpened]=useState(false);
  return (
    <div className='Header'>
         <div className="logo"><img src={logo} alt="" /></div>
         {
          menuOpened===false&& mobile===true ?(
              <div
              style={{
              backgroundColor: 'var(--appColor)',
              padding:'0.5rem',
              borderRadius:'5px'}}
              onClick={()=>setMenuOpened(true)}>
                <img src={Bars} alt='' style={{width:'1.5rem',height:'1.5rem'}}/>
              </div>
          ):(
            <ul className='Header-menu'>
            <li className='list'>
               <Link onClick={()=>setMenuOpened(false)}
                activeClass='active'
                to="home"
                spy={true}
                smooth={true}
               >
                Home</Link>
            </li>
            <li className='list'>
            <Link onClick={()=>setMenuOpened(false)}
               activeClaProgramsss='active'
               to="programs"
               spy={true}
               smooth={true}
               >Programs</Link>
            </li>
            <li className='list'>
              <Link onClick={()=>setMenuOpened(false)}
                activeClass='active'
                to="reasons"
                spy={true}
                smooth={true}
                >Why us</Link>
            </li>
            <li className='list'>
               <Link onClick={()=>setMenuOpened(false)}
               activeClass='active'
               to="plans"
               spy={true}
               smooth={true}
               >Plans</Link>
            </li>
            <li className='list'>
              <Link onClick={()=>setMenuOpened(false)}
               activeClass='active'
               to="testimonials"
               spy={true}
               smooth={true}
               > Testimonials</Link> 
            </li>
         </ul>
          )
         }
    </div>
  )
}

export default Header
