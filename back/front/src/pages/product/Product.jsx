import React,{useCallback,useEffect,useState} from 'react'
import {reactLocalStorage} from 'reactjs-localstorage';
import './product.css'
import arrow_left from '../../images/arrow_left.svg'
import cal from '../../images/calender.svg'

import Card from '../../components/cards/Card'
import Desc from '../../components/Description/Desc'
import Addnew from '../../components/Addnew/Addnew'
import Addbar from '../../components/Addbar/Addbar'
import {useSelector,useDispatch} from 'react-redux'
import {getSingleStart,reAddStart,clearStart,saveToggleStart} from '../../redux/actions'
import {useNavigate,useParams} from 'react-router-dom'
import Lists from '../../components/Lists/Lists'

function Product() {

    const navigate=useNavigate();

    const [toggleEdit,setEdit]= useState(JSON.parse(reactLocalStorage.get('var',false) ))

    // const toggleEdit = useSelector((state)=>(state.Items.toggleEdit))
    const handleClick = useCallback(() => navigate(`/`,[navigate]));


    
    
    const dispatch=useDispatch();

    const params=useParams();

    const loading=useSelector(state=>(state.Items.loading))
    
    const addToggle=useSelector(state=>(state.Items.Addnew))

    
    const addnew=useSelector(state=>(state.Items.Addnew))
   

    const item=useSelector((state)=>state.Items.singleItem)

    const mobile=useSelector((state)=>(state.Items.mobile))

const cart=useSelector((state)=>(state.Items.cart))

const tick=useSelector(state=>(state.Items.tick))

const list=useSelector(state=>(state.Items.list))

    
    const [days,setDays] = useState(["mon","tue","wed","thu","fri","sat","sun"])
      
    const [name,setName] = useState("");
    

    const change=()=>{
        reactLocalStorage.set('var', false);
                    setEdit(JSON.parse(reactLocalStorage.get('var',false) ))
    }

    const turn=()=>{

        
        reactLocalStorage.set('var', false);
        setEdit(JSON.parse(reactLocalStorage.get('var',false) ))

        
        
       
    }    

   
    useEffect(()=>{
     
        
        dispatch(getSingleStart(params.id))
        setName(reactLocalStorage.get('name',""))
        

    },[])

   

    useEffect(()=>{

        if(list.length==0){
            reactLocalStorage.set('var', false);
        setEdit(JSON.parse(reactLocalStorage.get('var',false) ))

    }

    },[list])


    useEffect(()=>{
     
        
        console.log("rendered")
        

    },[name])

    const modify=(d)=>{

        
        const date=new Date(d);

        const ans={};

        ans.day=days[date.getDay()]

        ans.date=date.toLocaleDateString()

        return ans



    }
  return (
    <div className='list_box '>
    <div className="list_box_left">
     
     
     <div className="back">

        <div className="back_left" onClick={()=>{navigate(-1)}}>
                <div className="back_arrow" >
                
                <img src={arrow_left} alt="" />
            </div>

            <div className="back_name">
                
                Back
            </div>
        </div>

        <div className="back_right" >

            {
               loading?"loading":
              
               
               
               !JSON.parse(toggleEdit) && list.length==0?<div className='bar edit' onClick={()=>{

                    dispatch(clearStart())
                    dispatch(reAddStart({lists:item.lists,id:params.id}))
                    
                //    dispatch({type:"DEFAULT_CHANGE",payload:item.name})
                
                   reactLocalStorage.set('var', true);
                    setEdit(JSON.parse(reactLocalStorage.get('var',false) ))

                    
                    reactLocalStorage.set('name', item.name);
                    setName(reactLocalStorage.get('name',"") )
                    
                    
                    }}>edit</div>:

                
                   

                <>
                <div className='bar cancel' onClick={()=>{
                    dispatch(clearStart())
                    
                    // dispatch({type:"DEFAULT_CHANGE",payload:""})
                    reactLocalStorage.set('var', false);
                    

                    setEdit(JSON.parse(reactLocalStorage.get('var',false) ))

                    reactLocalStorage.remove('name');
                    setName(reactLocalStorage.get('name',"") )

                }}>Discard</div>
                <div className='bar addmore' onClick={()=>{handleClick()}}>
                    <span className='bar_arrow'> <img src={arrow_left} alt="" /></span>
                    go to home to add more
                    
                </div>
                </>
            }
            
        </div>
        
     </div>
      
      <div className="back_wrapper">


            <div className="back_heading">
                <h1>{item!=null?item.name:"loading..."}</h1>
            </div>

            <div className="back_date">

                <div className="back_date_left">
                    <img src={cal} alt="" />
                </div>

                <div className="back_date_content">
                    {
                        item?`${modify(item.createdAt).day} ${modify(item.createdAt).date}`:"loading..."
                    }
                   
                </div>
               
            </div>

            {
                item!=null?item.lists.map((ele)=>{

                    return <>
                    <div className="back_item_cat">
                        {ele.name}
                    </div>
            
                    <div className="back_cards">
            
                        {
                            ele.items.map((el)=>{
            
                                return <Card text={el.name} extra={el.quantity} expand="true" status={el.completed} cat={ele.name} note={el.note} photo={el.photo}/>
                            })
                        }
                       
            
                    </div>
            </>
            
                }):"loading..."
            }


{/* {
    loading==false?item.lists.map((ele)=>{

        return <>
        <div className="back_item_cat">
            {ele.name}
        </div>

        <div className="back_cards">

            {
                ele.items.map((el)=>{

                    return <Card text={el.name} extra={el.quantity} expand="true" status={el.completed}/>
                })
            }
           

        </div>
</>

    }):"loading...."
} */}


      </div>

     
     
     


      
    </div>
    <div className={(mobile && !cart && !addnew && !tick)?"close":"list_box_right clear_translate"}>
    
    {
        tick?<Desc />: addToggle? <Addnew />:
          
        mobile && cart?<Addbar id={item?item._id:null} click={change} turn={turn} pname={name?name:""}/>:
        mobile && !cart?null:
        <Addbar id={item?item._id:null} click={change} turn={turn} pname={name?name:""}/>
          
        }
         {/* <Desc /> */}
    </div>
 </div>
  )
}

export default Product