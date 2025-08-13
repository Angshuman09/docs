import React from 'react'
import { motion } from "motion/react"
function Card({reference}) {
  return (
    <motion.div drag dragConstraints={reference} className='bg-amber-200 w-60 h-72 rounded-4xl p-2 selection:bg-red-800'>
      <div className='flex justify-center items-center bg-amber-400 rounded-t-4xl p-3 font-bold'>Notes</div>
      <p className='text-lg h-7/12 flex justify-center items-center text-center'>kaise ho guys</p>
      <div className='bg-amber-500 rounded-b-4xl p-4 flex justify-around items-center'>
        <div className='bg-green-200 rounded-lg py-1 px-3 hover:bg-green-300 italic'>Edit</div>
        <div className='bg-red-400 rounded-lg py-1 px-3 hover:bg-red-500 italic'>delete</div>
      </div>
    </motion.div>
  )
}

export default Card