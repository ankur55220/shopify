import React,{useEffect,useState} from 'react'
import Addbar from '../../components/Addbar/Addbar'
import Addnew from '../../components/Addnew/Addnew'
import HistoryPlate from '../../components/HistoryPlate/HistoryPlate'
import './history.css'
import Desc from '../../components/Description/Desc'

import {getSaveStart} from '../../redux/actions'

import {useSelector,useDispatch} from 'react-redux'

function History() {

  const dispatch=useDispatch()
  const addToggle= useSelector((state)=>(state.Items.Addnew));

  const saved=useSelector((state)=>(state.Items.saved))

  const mobile=useSelector((state)=>(state.Items.mobile))
  const addnew=useSelector(state=>(state.Items.Addnew))

const cart=useSelector((state)=>(state.Items.cart))

const tick=useSelector(state=>(state.Items.tick))

  

  const [months,setMonths]=useState(["January","February","March","April","May","June","July","August","September","October","November","December"])

  useEffect(()=>{
    dispatch(getSaveStart())

  },[])
  return (
    <div className='list_box '>
    <div className={(mobile && addnew) || (mobile && cart ) || (mobile && tick)?"close":`list_box_left`}>
     
       <h1 className="history_heading">Shopping history</h1>


      {/* <button onClick={()=>{console.log(saved)}}>click</button> */}

      {

        saved.map((ele)=>{
        
          const date=new Date(ele.createdAt)

          return  <div className="history_body his_body1">

          <div className="body_title">{`${months[date.getMonth()]} ${date.getFullYear()}`}</div>

          <HistoryPlate name={ele.name} date={date.toLocaleDateString()} status={ele.completed} id={ele._id}/>


          </div>
        })
      }

      
      

       
      
    </div>
    <div className={(mobile && !cart && !addnew && !tick)?"close":"list_box_right clear_translate"}>
      
    {
           tick?<Desc />: addToggle? <Addnew />:
          
           mobile && cart?<Addbar />:
           mobile && !cart?null:
           <Addbar />
        }

    </div>
 </div>
  )
}

export default History