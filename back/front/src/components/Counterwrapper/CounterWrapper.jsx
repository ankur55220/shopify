import React from 'react'
import Counter from '../Counter/Counter'
import trash from '../../images/trash.svg'
import './counterWrapper.css'
import {useDispatch} from 'react-redux'
import {addListStart,deleteFromListStart,deleteListStart} from '../../redux/actions'

function CounterWrapper({onClick,item_id,cat_id,quan,category,name}) {
  const dispatch=useDispatch();
  return (
    <div className='wrapper'>

        <div className="count_box trash" onClick={()=>{dispatch(deleteListStart({name}))}} style={{cursor:"pointer"}}>
            <img src={trash} alt="" className="" />
        </div>

        <div className="count_box minus" onClick={()=>{dispatch(deleteFromListStart({name}))}} style={{cursor:"pointer"}}>
            -
        </div>

        <Counter onClick={onClick} item_id={item_id} cat_id={cat_id} quan={quan}/>

        <div className="count_box plus" onClick={()=>{dispatch(addListStart({category,name}))}} style={{cursor:"pointer"}}>
            +
        </div>
    </div>
  )
}

export default CounterWrapper