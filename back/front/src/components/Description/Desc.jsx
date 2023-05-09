import React from 'react'
import './desc.css'
import arrow from '../../images/arrow_left.svg'
import ex from '../../images/example.jpeg'
import {addListStart,clearStart} from '../../redux/actions'
import {useSelector,useDispatch} from 'react-redux'
function Desc() {

  const oneItem=useSelector((state)=>(state.Items.oneItem))

  const dispatch=useDispatch()
  return (
    <div className='description'>
        
        <div className="desc_box desc_top">
            <div className="desc_back" onClick={()=>{dispatch({type:"tick",payload:null})}} style={{cursor:"pointer"}}>
               <div className="desc_arrow">
                 <img src={arrow} alt="" />
               </div>
               <div className="desc_back_text">
                Back
               </div>

            </div>

            <div className="item image">
               <img src={`${oneItem.photo}`} alt="" />
            </div>

            <div className="item_name_full">

              <div className="label">Name</div>
              <div className="label_name">{oneItem.name}</div>
            </div>


            <div className="item_name_full">

              <div className="label">Category</div>
              <div className="label_name rest">{oneItem.category}</div>
          </div>


          <div className="item_name_full">

            <div className="label">Note</div>
            <div className="label_name rest">

                {oneItem.note}
            </div>
        </div>
        </div>

        <div className="desc_box desc_bottom">
            
           <a href="#" className="delete" onClick={()=>{
            
            dispatch({type:"addNewToggle"})

            
            
            }}>Edit</a>
           <a href="#" className="add_to_list" onClick={()=>{
             
              dispatch(addListStart({category:oneItem.category,name:oneItem.name}))
              dispatch({type:"tick",payload:null})
           }}>add to list</a>
        </div>
    </div>
  )
}

export default Desc