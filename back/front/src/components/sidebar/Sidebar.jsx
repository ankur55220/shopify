import React from 'react'
import { useEffect,useRef } from 'react'
import './sidebar.css'
import logo from '../../images/logo.svg'
import cart from '../../images/cart.svg'
import history from '../../images/history.svg'
import stats from '../../images/stats.svg'
import moon from '../../images/moon.svg'
import list from '../../images/list.svg'
import {useSelector,useDispatch} from 'react-redux'

import {useNavigate} from "react-router-dom"
import { useState } from 'react'




function Sidebar() {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const msg= useSelector(state=>(state.Items.error));

    const [count,setCount]=useState(0);

    const lists=useSelector((state)=>(state.Items.list))
    

    // const st=useSelector((state)=>(state))

    

   useEffect(()=>{

    if(msg){
        alert(msg)
    }
    
   },[msg])

   useEffect(()=>{

    let c=0;

    

    lists.forEach(element => {

      element.items.forEach((el)=>{
        c+=el.quantity
      })
      
    });

    setCount(c)
    
   },[lists])


   useEffect(()=>{

    function handlResize(){
      
      
      if(window.innerWidth<810){
        dispatch({type:"mobileToggle",payload:true})
      }else{
        dispatch({type:"mobileToggle",payload:false})

      }
    
    }
  
    window.addEventListener('resize',handlResize)
    handlResize()
  
    
  
    })
  return (
    
    <nav className="navbar">

        <div className="nav_box nav_box1" onClick={()=>{navigate("/")}}>

            <img src={logo} alt="" className="logo" />
        </div>
        <div className="nav_box nav_box2">
            <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80" alt="" className="nav_img" />
        </div>
        <div className="nav_box nav_box3">
            <img src={moon} alt="" className="nav_img" />
        </div>
        <div className="nav_box nav_box4 small" onClick={()=>{navigate("/")}}>
            <img src={list} alt="" className="nav_img" />
        </div>
        <div className="nav_box nav_box5 small">
            <img src={history} alt="" className="nav_img" onClick={()=>{navigate("/history")}}/>
        </div>
        <div className="nav_box nav_box6" onClick={()=>{navigate("/stats")}}>
            <img src={stats} alt="" className="nav_img" />
        </div>
        <div className="nav_box nav_box7 small" onClick={()=>{dispatch({type:"cartClick"})}} >

             <span className='counter'>{count}</span>
            <img src={cart} alt="" className="nav_img" />
        </div>
    </nav>
  )
}

export default Sidebar