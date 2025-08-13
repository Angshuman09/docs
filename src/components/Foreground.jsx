import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref = useRef(null);
  return (
    <div ref={ref} className='fixed top-0 left-0 z-30 w-full h-full p-5'>
      <Card reference = {ref}/>
    </div>
  )
}

export default Foreground