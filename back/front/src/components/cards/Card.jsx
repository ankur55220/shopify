import React from 'react'
import './card.css'
import {useDispatch} from 'react-redux'
import {addListStart} from '../../redux/actions'

function Card({text,extra,expand,cat,status,note,img,id}) {

  const dispatch=useDispatch();

  
  return (
    <div className={expand && status?'card expand done':expand && !status?'card expand pend':"card"}>
        
        <div className="card_left" onClick={()=>{dispatch({type:"tick",
      
        payload:{
          name:text,
          category:cat,
          note:note,
          photo:img,
          id:id
        }
      })}} style={{cursor:"pointer"}}>
            {text}
        </div>

        <div className={expand?'card_right change':'card_right'}>
             {extra ?extra:
             
             <span style={{cursor:"pointer"}} onClick={()=>{dispatch(addListStart({category:cat,name:text}))}}>+</span>
             
             }
        </div>


    </div>
  )
}

export default Card