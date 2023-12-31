import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import Rightarrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className='Programs' id='programs'>
        <div className="programs-header1">
          <span>Explore our</span>
          <span>Programs</span>
          <span className='stroke-text'>to shape you</span>
        </div>
        <div className="program-categorieus">
            {
                programsData.map((program)=>{
                   return  <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>
                                Jion now
                            </span>
                            <img src={Rightarrow} alt="" />
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Programs
