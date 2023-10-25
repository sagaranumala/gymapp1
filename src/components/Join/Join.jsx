import React,{useRef} from 'react'
import './Join.css'
import emailjs from 'emailjs-com'

const Join = () => {
    const formref=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formref.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='join' id="join-us">
         <div className="left-j">
            <hr/>
              <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
              </div>
              <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
              </div>
         </div>
         <div className="right-j">
            <form ref={formref} className="email-container" onSubmit={sendEmail}>
                <input type='email' name='user_email' placeholder='Enter your emai address'/>
                <button className='btn btn-j'>Join now</button>
            </form>
         </div>
    </div>
  )
}

export default Join
