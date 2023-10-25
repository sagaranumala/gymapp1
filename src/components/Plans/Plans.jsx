import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className='plans-container'>
        <div className="blur plans-blur1">
             
        </div>
        <div className="blur plans-blur2">
             
        </div>
        <div className="program-header" >
            <span className='stroke-text'>READY TO START</span>
            <span className='span2'>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH US</span>
        </div>
        <div className="plans">
            {
                plansData.map((plan,i)=>{
                   return  <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>{plan.price}</span>
                        <div className="features">
                            {
                                plan.features.map((feature,i)=>{
                                    return <div className='feature'>
                                        <img src={whiteTick} alt="" />
                                       <span>P{feature}</span>
                                    </div>
                                })
                            }
                        </div>
                        <div>
                            <span>
                                See more benifites ->
                            </span>
                        </div>
                        <button className="btn">
                            Join now
                        </button>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Plans
