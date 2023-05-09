export const getItemStart = ()=>({

    type:"GET_ITEM_START"
    
})

export const getItemSuccess = (data)=>({

    type:"GET_ITEM_SUCCESS",
    data
    
})

export const getItemFailure = ()=>({

    type:"GET_ITEM_FAILURE"
    
})


export const addItemStart = (data)=>({
  
    type:"ADD_ITEM_START",
    payload:data
})


export const addItemSuccess = (data)=>{

    

    return{
        type:"ADD_ITEM_SUCCESS",
        payload:data
    }
}


export const addItemFailure = (data)=>({
  
    type:"ADD_ITEM_FAILURE",
    payload:data

})


export const addListStart = (data)=>({
  
    type:"ADD_LIST_START",
    payload:data
})


export const addListSuccess = (data)=>{

    

    return{
        type:"ADD_LIST_SUCCESS",
        payload:data
    }
}


export const addListFailure = (data)=>({
  
    type:"ADD_LIST_FAILURE",
    payload:data

})


export const getListStart = (data)=>({
  
    type:"GET_LIST_START",
    payload:data
})


export const getListSuccess = (data)=>({
  
    type:"GET_LIST_SUCCESS",
    payload:data

})


export const getListFailure = (data)=>({
  
    type:"GET_LIST_FAILURE",
    payload:data

})


export const deleteFromListStart = (data)=>({
  
    type:"DELETE_FROM_LIST_START",
    payload:data
})


export const deleteFromListSuccess = ()=>({
  
    type:"DELETE_FROM_LIST_SUCCESS",
    

})


export const deleteFromListFailure = (data)=>({
  
    type:"DELETE_FROM_LIST_FAILURE",
    payload:data

})


export const deleteListStart = (data)=>({
  
    type:"DELETE_LIST_START",
    payload:data
})


export const deleteListSuccess = ()=>({
  
    type:"DELETE_LIST_SUCCESS",
    

})


export const deleteListFailure = (data)=>({
  
    type:"DELETE_LIST_FAILURE",
    payload:data

})


export const switchStart = (data)=>({
  
    type:"SWITCH_START",
    payload:data
})


export const switchSuccess = ()=>({
  
    type:"SWITCH_SUCCESS",
    

})


export const switchFailure = (data)=>({
  
    type:"SWITCH_FAILURE",
    payload:data

})


export const completeStart = (data)=>({
  
    type:"COMPLETE_START",
    payload:data
})


export const completeSuccess = (data)=>({
  
    type:"COMPLETE_SUCCESS",
    payload:data
    

})


export const completeFailure = (data)=>({
  
    type:"COMPLETE_FAILURE",
    payload:data

})



export const saveStart = (data)=>({
  
    type:"SAVE_START",
    payload:data
})


export const saveSuccess = (data)=>({
  
    type:"SAVE_SUCCESS",
    payload:data
    

})


export const saveFailure = (data)=>({
  
    type:"SAVE_FAILURE",
    payload:data

})


export const getSaveStart = ()=>({
  
    type:"GET_SAVE_START"
    
})


export const getSaveSuccess = (data)=>({
  
    type:"GET_SAVE_SUCCESS",
    payload:data
    

})


export const getSaveFailure = (data)=>({
  
    type:"GET_SAVE_FAILURE",
    payload:data

})



export const getSingleStart = (data)=>({
  
    type:"GET_SINGLE_START",
    payload:data
    
})


export const getSingleSuccess = (data)=>({
  
    type:"GET_SINGLE_SUCCESS",
    payload:data
    

})


export const getSingleFailure = (data)=>({
  
    type:"GET_SINGLE_FAILURE",
    payload:data

})


export const reAddStart = (data)=>({
  
    type:"READD_START",
    payload:data
    
})


export const reAddSuccess = ()=>({
  
    type:"READD_SUCCESS"
    
    

})


export const reAddFailure = (data)=>({
  
    type:"READD_FAILURE",
    payload:data

})



export const clearStart = ()=>({
  
    type:"CLEAR_START"
    
    
})


export const clearSuccess = ()=>({
  
    type:"CLEAR_SUCCESS"
    
    

})


export const clearFailure = (data)=>({
  
    type:"CLEAR_FAILURE",
    payload:data

})





export const saveToggleStart = (data)=>({
  
    type:"SAVETOGGLE_START",
    payload:data
    
    
})


export const saveToggleSuccess = ()=>({
  
    type:"SAVETOGGLE_SUCCESS"
    
    

})


export const saveToggleFailure = (data)=>({
  
    type:"SAVETOGGLE_FAILURE",
    payload:data

})


export const statStart = ()=>({
  
    type:"STAT_START"
    
    
    
})


export const statSuccess = (data)=>({
  
    type:"STAT_SUCCESS",
    payload:data
    
    

})


export const statFailure = (data)=>({
  
    type:"STAT_FAILURE",
    payload:data

})


export const searchStart = (data)=>({
  
    type:"SEARCH_START",
    payload:data
    
    
    
})


export const searchSuccess = (data)=>({
  
    type:"SEARCH_SUCCESS",
    payload:data
    
    

})


export const searchFailure = (data)=>({
  
    type:"SEARCH_FAILURE",
    payload:data

})





















