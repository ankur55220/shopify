import React from 'react'
import { useState } from 'react'
import './addnew.css'
import {addItemStart} from '../../redux/actions'
import {useDispatch,useSelector} from 'react-redux'
function Addnew() {
  
  const temp=useSelector(state=>(state))
  const dispatch = useDispatch();
  

  const edited=useSelector(state=>(state.Items.oneItem))


  const [name,setName]=useState(edited?edited.name:"");
  const [photo,setPhoto]=useState(edited?edited.photo:"");
  const [category,setCategory]=useState(edited?edited.category:"");
  const [note,setNote]=useState(edited?edited.note:"");

  return (
    
    <div className="form">
        <div className="form_title">
            <h1>Add a new Item</h1>
        </div>


        


        <div className="add_form">

            <div className="name_title">Name</div>
            <input type="text" className="form_input name" defaultValue={name} placeholder='Enter a name' onChange={(e)=>{
              setName(e.currentTarget.value)
            }}/>

            <div className="name_title">Note ( optional )</div>
            <textarea name="textarea" className='form_input note' id="" cols="100" rows="100" defaultValue={note} placeholder='Enter a note' onChange={(e)=>{setNote(e.currentTarget.value)}}></textarea>
            {/* <input type="text" className="form_input note"  placeholder='Enter a Note'/> */}

            <div className="name_title">Image</div>
            <input type="text" className="form_input image"  placeholder='Enter a url' defaultValue={photo} onChange={(e)=>{setPhoto(e.currentTarget.value)}}/>

            <div className="name_title">Category</div>
            <input type="text" className="form_input category" placeholder='Choose a category' defaultValue={category} onChange={(e)=>{setCategory(e.currentTarget.value)}}/>
        </div>

        <div className="buttons">
          <a href="#" className="butt btn1" onClick={()=>{
            dispatch({type:"addNewToggle"})
            
            dispatch({type:"antitick"})
            }}>Cancel</a>
          <a href="#" className="butt btn2" onClick={()=>{

            const data={}
            data.name=name
            data.category=category
            data.photo=photo
            data.note=note

            

            dispatch(addItemStart(data))
            dispatch({type:"antitick"})
            dispatch({type:"addNewToggle"})
          }}>Save & Send</a>
        </div>

        
    </div>
  )
}

export default Addnew