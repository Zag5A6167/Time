import React,{useState,useEffect} from 'react'
import './DateTime.css'
function DateTime() {
    var [date,setDate] = useState(new Date())

    useEffect(()=>{
        var timer = setInterval(()=> setDate(new Date()),1000)

        return function cleanup(){
            clearInterval(timer)
        }
    },[])

  return (
    <div>
       <h1 className='title'>{date.toLocaleTimeString('en-US', { second: 'numeric', hour: 'numeric', minute: 'numeric' })}</h1>
    </div>
  )
}

export default DateTime