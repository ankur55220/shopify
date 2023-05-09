import React from 'react'
import './counter.css'
function Counter({onClick,item_id,cat_id,quan,status}) {
  return (
    <div className={status?`counter disable`:`counter`} onClick={()=>{
      
      
      onClick(item_id,cat_id)}
      
      
      }>
        <span>{quan}</span>pcs
    </div>
  )
}

export default Counter