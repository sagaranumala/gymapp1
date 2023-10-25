import React from 'react'
import Header from './Header/Header'
import './Hero.css'
import hero_image from '../assets/hero_image.png'
import heart_image from '../assets/heart.png'
import hero_image_back from '../assets/hero_image_back.png'
import calories from '../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter';

function Hero() {
  const transition ={type:'spring',duration:3}
  return (
    <div className='Hero' id="home">
        <div className='blur blur-h'></div>
        <div className="left-h">
            <Header/>
            <div className="the-best-ad">
                <div className='anm1'></div>
               <span className='title'>The Best fitness cub in the town</span>
            </div>
            <div className="hero-text">
              <div>
                <span className='stroke-text'>Shape</span>
                <span>Your</span>
              </div>
                
                <div>
                  <span>Ideal Body</span>
                </div>
                <div>
                   <span>
                       In here we will help you to shape your ideal body and live up your life to fullest
                   </span>
                </div>
            </div>
            <div className="figures">
                    <div>
                       <span><NumberCounter end={140} start={100} delay='4' preFix='+'/></span>
                       <span>expert coaches</span>
                    </div>
                    <div>
                       <span><NumberCounter end={978} start={800} delay='4' preFix='+'/></span>
                       <span>members joined</span>
                    </div>
                    <div>
                       <span><NumberCounter end={50} start={0} delay='4' preFix='+'/></span>
                       <span>fitness Programs</span>
                    </div>
                </div>
                <div className="hero-btn">
                    <button className="btn">
                        Get started
                    </button>
                    <button className="btn">
                        Learn more
                    </button>
                </div>
        </div>
        <div className="right-h">
             
             <motion.div className="heart-rate"
             initial={{right:'-1rem'}}
             whileInView={{right:'4rem'}}
             transition={transition}
             >
                <img src={heart_image} alt="image" />
                 <span>
                     Heart rate
                 </span>
                 <span style={{color:'white'}}>
                     116 bpm
                 </span>
             </motion.div>
             <button className="btn btn_heart">
                Join now
             </button>
             <img className="hero_image" src={hero_image} alt='100000'/>
             <motion.img 
             initial={{right:'11rem'}}
             whileInView={{right:'25rem'}}
             transition={transition}
             className="hero_image_back" src={hero_image_back} alt='100000'/> 
             <motion.div 
             initial={{right:'45rem'}}
             whileInView={{right:'32rem'}}
             transition={transition}
             className="calories">
                 <img src={calories} alt="" />
                 <span > 
                   Calories Burned
                 </span>
                 <span>
                      220 kcal
                 </span>
             </motion.div>
        </div>
    </div>
  )
}

export default Hero
