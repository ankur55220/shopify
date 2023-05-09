import React from 'react'
import './addbar.css'
import {reactLocalStorage} from 'reactjs-localstorage';
import search from '../../images/search.svg'
import Card from '../../components/cards/Card'
import bottle from '../../images/bottle.svg'
import shop from '../../images/shop.svg'
import Lists from '../Lists/Lists'
import {useState,useEffect,useRef} from 'react'
import {getListStart,completeStart,saveStart,saveToggleStart} from '../../redux/actions'
import {useDispatch,useSelector} from 'react-redux'

function Addbar({click,turn,pname}) {

  const dispatch=useDispatch();

  const inputref=useRef();

  const lists=useSelector(state=>(state.Items.list))

  const isCom=useSelector((state)=>state.Items.listCompleted)

  const active=useSelector((state)=>state.Items.active)

  const listDone=useSelector(state=>(state.Items.listCompleted))

  const id=useSelector((state)=>(state.Items.id))

  const st=useSelector((state)=>(state))

  const [name,setName]=useState("");


  
  

  useEffect(()=>{
   

    dispatch(getListStart());

    
  },[])

  useEffect(()=>{
    dispatch(completeStart())
  },[])

  useEffect(()=>{

   

    if(lists.length==0 && inputref.current.value.length>0){
      inputref.current.value=""

      console.log("dddddddddddddddddjjjjjjjjjj")

     
    }

    
    
  },[lists])

  useEffect(()=>{
   setName(pname)
  },[pname])


 
  
  
  return (
    <>
    
    <div className="right_upper">
            
            <div className="right_banner_container">
               
               <div className="right_banner">
                 
                 <button onClick={()=>{console.log(st)}}>click</button>
                 <div className="left_banner_img">
                     
                     <img src={bottle} alt="" className="left_banner_image" />
                 </div>

                 <div className="right_banner_content">
                     <p className="right_banner_content_para">Didn't find what you need?</p>

                     <a href="#" className="btn_prime banner_link" onClick={()=>{dispatch({type:"addNewToggle"})}}>click here</a>
                 </div>

               </div>
            </div>

             
           

          </div>

          <div className="right_middle">

            
              {

                lists.length==0?(

                  <div className="no_items">
                    
                  <div className="text">
                    no items
                  </div>

                  <div className="no_items_image">
                      <img src={shop} alt="" className="cart_img" />
                  </div>
                </div> 
                ): <Lists lists={lists} status={isCom}/>
              }

                 
          </div>

          <div className="right_lower">
            <button onClick={()=>{console.log(st)}}>click</button>
            <div className="right_lower_input">

              
              <input ref={inputref} type="text" className="lower_input" placeholder='Enter a name' 
              value={name} onChange={(e)=>{setName(e.currentTarget.value)}}/>
            </div>
            

            <div className="right_lower_btn" onClick={()=>{
                              
                              
              dispatch(saveStart({data:lists,status:isCom,name:name?name:active,id:id}))
              // dispatch({type:"DEFAULT_CHANGE",payload:""})

              reactLocalStorage.remove('name');
              setName("")

              if(id){
                dispatch(saveToggleStart({id,status:listDone}))

              }

              if(click){
                click()
              }
              

              
            
            }
              
              }>
              SAVE
            </div>
          </div>
    </>
  )
}

export default Addbar