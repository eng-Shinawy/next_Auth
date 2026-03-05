import React from 'react'
import { BsExclamationTriangle,BsCheckCircle } from 'react-icons/bs';
interface AlertProps {
    type:"success" | "error";
    message:string;
}
function Alert({type, message}:AlertProps) {
    const setColors = ()=>{
        if(type==="error") return "bg-red-100 text-red-900 border-red-200";
        return  "bg-green-100 text-green-900 green-red-200";
    }
  return (
    <div className={`${setColors()} rounded-md p-2 flex items-center my-1 border`}>
      {type==="error"?
      <BsExclamationTriangle className='me-1'/>
      :
      <BsCheckCircle className='me-1'/>} {message}
    </div>
  )
}

export default Alert
