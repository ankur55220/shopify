import React,{useCallback,useEffect} from 'react'
import './historyplate.css'
import arrow from '../../images/rarrow.svg'
import cal from '../../images/calender.svg'
import {useNavigate} from 'react-router-dom'


function HistoryPlate({name,date,status,id}) {

    const navigate=useNavigate();

    const handleClick = useCallback(() => navigate(`/history/product/${id}`,[navigate]));


   
  return (
    <div className='historyPlate'>
        

        <div className="inner_plate historyPlate_left">
        {name}
        </div>

        <div className="inner_plate historyPlate_right">
            

            <div className="his_box cal_icon" >
                <img src={cal} alt="" />
            </div>

            <div className="his_box cal_date">
            {date}
            </div>

            <div className={status?"his_box status":"his_box antistatus"}>

                {
                    status?"completed":"pending"
                }
                
            </div>

            <div className="his_box more" onClick={()=>{handleClick()}}>
                <img src={arrow} alt="" />
            </div>


        </div>
        
    </div>
  )
}

export default HistoryPlate