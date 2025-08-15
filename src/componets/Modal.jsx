import React from 'react'
import {useState} from "react"
import Swal from 'sweetalert2';

function Modal({producto}) {
   const [pro,setpro] = useState([])

   

  const most = () => {
    
  } 

  return (
    <div>
      <button onClick={most}  className='btn-primary'>view</button>
    </div>
  )
}

export default Modal