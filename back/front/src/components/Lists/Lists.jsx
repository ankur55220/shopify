import React,{useState,useEffect} from 'react'
import './list.css'
import edit from '../../images/edit.svg'
import done from '../../images/done.svg'
import Counter from '../Counter/Counter'
import CounterWrapper from '../Counterwrapper/CounterWrapper'
import {useSelector,useDispatch} from 'react-redux'
import {switchStart,completeStart} from '../../redux/actions'

function Lists({status}) {

  const dispatch=useDispatch();
  const [toggele,setToggle]=useState(false);

  const [index,setIndex]=useState(null);

  const [triggerBox,setBox]=useState(false)

  const lists=useSelector((st)=>(st.Items.list))

  

  

  const trigger=(it_id,ct_id)=>{
    console.log(ct_id)
    setIndex(state=>({
      ...state,
      [`pair_${it_id}${ct_id}`]:{
        [`${it_id}${ct_id}`]:`${it_id}${ct_id}`,
        [ct_id]:ct_id
      }
    }))
    setToggle(!toggele)
  }


  const removeTrigger=(it_id,ct_id)=>{
    
//     const toremove=`pair_${it_id}${ct_id}`
// console.log(index)

// console.log(toremove)
    setIndex(state=>{

      
    const copy={...state}

    delete copy[`pair_${it_id}${ct_id}`]

    return copy

    })
  }
  
  return (
    <div className='lists'>
        <div className="list_title">
            <div className="list_title_left">

              <div className="inner">Shopping list</div>
               

               {
                status?<div className="inner_img"><img src={done} alt="" /></div>:null
               }
            </div>

            <div className="list_title_right" onClick={()=>{setBox(!triggerBox)}}>
              <img src={edit} alt="" />
           </div>

        </div>


        <ul className="items">

         
            {

              lists.map((ele)=>{


                return <li className="item_category">

                <h1 className="item_heading">{ele.name}</h1>

                <ul className="item">
               
               {

                ele.items.map((el,ind)=>{
                  
                  return  <li className="item_name" >
                  <div className="item_desc">
                    
                    <div className={el.completed?`item_left through`:`item_left`}>
                      {
                        triggerBox?<span style={{marginRight:"0.5rem"}}><input type={"checkbox"}  defaultChecked={el.completed} onClick={()=>{dispatch(switchStart({name:el.name}))}}/></span>:null
                      }
                    {
                      el.name
                    }
                    </div>

                    <div className="item_right">

                      {
                      index==null?
                      <>
                        
                        
                        <Counter onClick={trigger} item_id={ind} cat_id={ele._id} quan={el.quantity} status={el.completed}/>

                      </>:index[`pair_${ind}${ele._id}`] && index[`pair_${ind}${ele._id}`][`${ele._id}`]?
                      <>
                    
                      <CounterWrapper onClick={removeTrigger} item_id={ind} cat_id={ele._id} quan={el.quantity} category={ele.name} name={el.name}/>

                      </>
                      
                      :

                        <Counter onClick={trigger} item_id={ind} cat_id={ele._id} quan={el.quantity} status={el.completed}/>


                      }
                      
                    </div>
                    
                    
                    </div>
              </li>
                })
               }

                </ul>


                </li>
              })

            }
        
         

        </ul>
    </div>
  )
}

export default Lists