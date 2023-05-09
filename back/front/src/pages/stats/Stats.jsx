import React,{useEffect} from 'react'
import Slider from '../../components/Slider/Slider'
import './stats.css'
import Addbar from '../../components/Addbar/Addbar'
import Addnew from '../../components/Addnew/Addnew'
import Desc from '../../components/Description/Desc'
import {statStart} from '../../redux/actions'
import {useDispatch,useSelector} from 'react-redux'
function Stats() {

  const dispatch = useDispatch()
  const addToggle=useSelector(state=>(state.Items.Addnew))

  const stat =useSelector(state=>(state.Items.stat))


  const addnew=useSelector(state=>(state.Items.Addnew))
  const mobile=useSelector((state)=>(state.Items.mobile))

const cart=useSelector((state)=>(state.Items.cart))

const tick=useSelector(state=>(state.Items.tick))

  useEffect(()=>{
   dispatch(statStart())
  },[])

  return (
    <div className='list_box '>
    <div className={(mobile && addnew) || (mobile && cart ) || (mobile && tick)?"close":`list_box_left`}>
     
      <div className="total_nos">


        <div className="total_left">
            <div className="total_left_heading">
                <h1 className="top top_items">Top Items</h1>
            </div>

            {
              stat?stat.items.slice(0,3).map((ele)=>{

                return  <div className="stat_item item1">
              
                <Slider name={ele.name} per={ele.per}/>
  
              </div>
              }):"loading..."
            }

           
        </div>

        <div className="total_right">
            
            
        <div className="total_left_heading">
                <h1 className="top top_items">Top Categories</h1>
        </div>

            {
              stat?stat.cat.slice(0,3).map((ele)=>{

                return  <div className="stat_item item1">
              
                <Slider blue="yes" name={ele.name} per={ele.per}/>
  
              </div>
              }):"loading..."
            }
           
           
        </div>

      </div>
      
     


      
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

export default Stats