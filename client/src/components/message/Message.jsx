import React from 'react'
import './message.css'
export default function Message({own}) {
  return (
    <div className={own ? 'message own' : 'message'}>
        <div className="messageTop">
            <img 
            src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt="" 
            className="messageImg" />
            <p className="messageText"> Hello this is Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe aliquid consequuntur neque quos accusantium incidunt doloribus aperiam cumque quidem!</p>
        </div>
        <div className="messageBottom">1 hour ago</div>
    </div>
  )
}
