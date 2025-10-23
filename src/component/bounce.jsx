import React from 'react'
import { easeOut, motion } from "framer-motion"
import './bounce.css'

const bouncevarient={
    ani:{
        x:[-30,30],
        y:[0,100],
        transition:{
           
            x:{
                repeat:  Infinity,
                yoyo:50,
                duration:0.5,
                ease:easeOut
               
            },
            y:{
                repeat:  Infinity,
                yoyo:50,
                duration:0.25,
                ease:easeOut
                
            }
        }
    }
}
const Bounce = () => {
  return (
    <>
        <motion.div  className="bounce" variants={bouncevarient} animate="ani"> 
    </motion.div>
    <motion.div  className="bounce2" variants={bouncevarient} animate="ani">
    </motion.div>
    </>
  )
}

export default Bounce