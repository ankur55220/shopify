import React from 'react'
import './ListPage.css'
import sear from '../images/search.svg'
import Card from '../components/cards/Card'
import bottle from '../images/bottle.svg'
import shop from '../images/shop.svg'
import Addbar from '../components/Addbar/Addbar'
import Addnew from '../components/Addnew/Addnew'
import Desc from '../components/Description/Desc'
import {getItemStart,searchStart} from '../redux/actions'
import { useEffect,useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import {reactLocalStorage} from 'reactjs-localstorage';


function ListPage() {
const dispatch=useDispatch();

const curr=useSelector((state)=>{
  return {
    items:state.Items.category,
    loading:state.Items.loading

  }
})

const addToggle=useSelector((state)=>{

  
  return state.Items.Addnew
})



const mobile=useSelector((state)=>(state.Items.mobile))

const cart=useSelector((state)=>(state.Items.cart))

const tick=useSelector(state=>(state.Items.tick))

const addnew=useSelector(state=>(state.Items.Addnew))

const search=useSelector((state)=>(state.Items.search))

const [name,setName] =useState();

const [find,setCurr]=useState("")
  useEffect(()=>{
    
    dispatch(getItemStart());

    let curr=reactLocalStorage.get('name',"")

    if(curr.length>0){
      setName(curr)
    }


  },[])

 
  return (
    
    <div className='list_box'>
       <div className={(mobile && addnew) || (mobile && cart ) || (mobile && tick)?"close":`list_box_left`}>
        
        <div className="list_left_upper">
            <div className="left_banner">
              
              <h1 className="banner"><span>Shoppingify</span> allows you take your shopping list wherever you go</h1>
            </div>

            <div className="left_search">
              
              <input type="text" className="left_search_input" placeholder='search item' onChange={(e)=>{

               if(e.currentTarget.value==""){

                
                dispatch(searchStart({name:""}))
               }
                setCurr(e.currentTarget.value)
               
               
              }}/>

              <a href="#" className="btn fl" onClick={()=>{dispatch(searchStart({name:find}))}}><img src={sear} alt="" /></a>
            </div>
            
          </div>

          <div className="list_left_lower">

            {

              curr.loading?<div>"Loading..."</div>:

              search!=null?
              
              <div className="lower_box">
                <h1 className="list_heading">{search.item.name}</h1>

                <div className="lower_cards">

                <Card text={search.item.name} cat={search.cat} note={search.item.note} img={search.item.photo} id={curr._id}/>

                </div>
                </div>


              :

              curr.items.length>0?

              (curr.items.map((ele)=>{
                return  <div className="lower_box">
                <h1 className="list_heading">{ele.name}</h1>
  
                  {
                    ele.items.length>0?
                    <div className="lower_cards">
                      {

                      ele.items.map((el)=>{

                           return <Card text={el.name} cat={ele.name} note={el.note} img={el.photo} id={curr._id}/>
 

                          })

                      }
                    
                    </div>
                    :null
                  }
                
              </div>
              })):<div>"Nothing to show yet"</div>
            }
            
     
          </div>

       </div>

       
       <div className={(mobile && !cart && !addnew && !tick)?"close":"list_box_right clear_translate"}>
        
          {/* <div className="right_upper">
            
            <div className="right_banner_container">
               
               <div className="right_banner">
                 
                 <div className="left_banner_img">
                     
                     <img src={bottle} alt="" className="left_banner_image" />
                 </div>

                 <div className="right_banner_content">
                     <p className="right_banner_content_para">Didn't find what you need?</p>

                     <a href="#" className="btn_prime banner_link">click here</a>
                 </div>

               </div>
            </div>

             
           

          </div>

          <div className="right_middle">
              <div className="no_items">
                    
                    <div className="text">
                      no items
                    </div>

                    <div className="no_items_image">
                        <img src={shop} alt="" className="cart_img" />
                    </div>
                  </div>
          </div>

          <div className="right_lower">
            
            <div className="right_lower_input">
              <input type="text" className="lower_input" placeholder='Enter a name'/>
            </div>
            

            <div className="right_lower_btn">
              SAVE
            </div>
          </div> */}

        {
         tick?<Desc />: addToggle? <Addnew />:
          
          mobile && cart?<Addbar pname={name}/>:
          mobile && !cart?null:
          <Addbar pname={name}/>
        }
          

          {/* <Addnew /> */}

       </div>
    </div>
  )
}

export default ListPage