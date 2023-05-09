import {takeLatest,all,call,put} from 'redux-saga/effects'
import {searchSuccess,searchFailure,statStart,statSuccess,statFailure,saveToggleStart,saveToggleSuccess,saveToggleFailure,clearFailure,clearSuccess,getSingleStart,reAddFailure,reAddSuccess,getSingleFailure,getSingleSuccess,getSaveFailure,getSaveStart,saveSuccess,saveFailure,completeStart,completeSuccess,completeFailure,switchSuccess,switchFailure,deleteListSuccess,deleteListFailure,deleteFromListFailure,deleteFromListSuccess,getListStart,getItemSuccess,getItemStart,getItemFailure,addItemSuccess,addItemFailure,addListSuccess,addListFailure,addListStart, getListFailure,getListSuccess, getSaveSuccess} from './actions'
import {api} from '../../src/backend'


function* addItemSync(){
   
   try{

      
      const data=yield fetch(`${api}/`);
const res=yield data.json();

if(res.error){

   yield put(getItemFailure(res.error))
}

yield put(getItemSuccess(res.data))

   }
   catch(err){

      yield put(getItemFailure(err))
   }




 
}

function* newItemSync(payload){
 
   try{

      
      const {name,category,note,photo} = payload.payload;
      
      const result = yield fetch(`${api}/addnew`,{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
   
         body: JSON.stringify({
            name,
            category,
            photo,
            note
         })
      })

      const fres=yield result.json();
      
      if(fres.error){
         yield put(addItemFailure(fres.error))
      }else{
         yield put(addItemSuccess({full:fres.data}))
         // yield put(addListStart({category,name}))
         yield put(getItemStart())
      }
      


   }
   catch(err){
      console.log(err)
      yield put(addItemFailure("something went wrong"));
   }
  



}

function* addListSync(payload){

   try{

      const {category,name}=payload.payload
      
      const data= yield fetch(`${api}/addtolist`,{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            category:category,
            name:name
         })
      })

      const res=yield data.json();

      if(res.error){
         yield put(addListFailure(res.error))
      }else{
         yield put(addListSuccess(res.data))
         yield put(getListStart())
         yield put(completeStart())
      }

   }
   catch(err){
      yield put(addListFailure("something went wrong"))
   }


}

function* getListSync(){
   

   try{

      
      const lists=yield fetch(`${api}/getList`)

      const res=yield lists.json();

   

         
      if(res.error){
         yield put(getListFailure(lists.error));
      }else{
         yield put(getListSuccess(res.data))
      }

     





   }

   catch(err){
      console.log(err)

      yield put(getListFailure("something went wrong"))
   }

   

}

function* deleteFromListSync(payload){
  

   try{

      const {name}=payload.payload;
      
      
      const result  = yield fetch(`${api}/declist`,{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            name
         })
      })

      const res=yield result.json();


      if(res.error){

         yield put(deleteFromListFailure(res.error))
      }else{
         yield put(deleteFromListSuccess())
         yield put(getListStart())
      }

   }
   catch(err){
      yield put(deleteFromListFailure(err))
   }
   

}

function* deleteListSync(payload){

   try{

      const {name}=payload.payload
      
      const result=yield fetch(`${api}/deletelist`,{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            name:name
         })
      })

      const res=yield result.json();

      if(res.error){
         yield put(deleteListFailure(res.err))
      }else{

         yield put(deleteListSuccess())
         yield put(getListStart())
         yield put(completeStart())
      }

   }
   catch(err){

   }
}

function* switchSync(payload){

   try{

      const {name} = payload.payload

   
      const result = yield fetch(`${api}/switch`,{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            name
         })
      })

      const res=yield result.json();

      if(res.error){

         yield put(switchFailure(res.error))
      }else{

      yield put(switchSuccess())
      yield put(getListStart())
      yield put(completeStart())
      }


   }
   catch(error){

      yield put(switchFailure(error))
   }
}

function* completeSync(){

   try{
      
      const result=yield fetch(`${api}/iscomplete`)

      const res=yield result.json();

      

      if(res.error){
         yield put(completeFailure(res.error))
      }else{
         yield put(completeSuccess(res.status))
      }

   }
   catch(err){

      yield put(completeFailure(err))
   }
}

function* saveSync(payload){

   try{

   

   const {data,status,name,id} =payload.payload

   const result={
      name:name,
      completed:status,
      lists:data
   }
   
   const res=yield fetch(`${api}/save`,{
      method:"POST",
      headers:{
         "Content-Type":"application/json"
      },
      body:JSON.stringify(result)

   })
   const res2=yield res.json();

   if(res2.error){
         yield put(saveFailure(res2.error))
   }else{
      yield put(saveSuccess())
      yield put(getSaveStart())
      
      yield put(getListStart())

      if(id){
         yield put(getSingleStart(id))
      }
   }

}
catch(err){
   yield put(saveFailure(err))
}







}

function* getSaveSync(){
   
   try{

      
      const result=yield fetch(`${api}/getsave`);

      const res= yield result.json();

      if(res.error){
         yield put(getSaveFailure(res.error))
      }else{

        yield put(getSaveSuccess(res.data))
      }


   }
   catch(err){

    yield put(getSaveFailure(err))
   }
}


function* getSingleSync(payload){

   try{

      const id=payload.payload
      
      
      
      const result=yield fetch(`${api}/getsingleitem`,{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            id
         })

      })

      const res=yield result.json();

      if(res.error){

         yield put(getSingleFailure(res.error))
      }else{
         yield put(getSingleSuccess(res.data))
      }

   }
   catch(err){

      console.log(err)
      yield put(getSingleFailure(err))

   }

}

function* reAddSync(payload){

   try{

      const {lists,id}=payload.payload;

      
   
      const result=yield fetch(`${api}/reAdd`,{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            data:lists
         })
      })

      const res=result.json();

      if(res.error){
         yield put(reAddFailure(res.error))
      }else{
         yield put(reAddSuccess())
         yield put(getListStart())


         if(id){
            yield put(getSingleStart(id))

         }
         yield put(completeStart())
         
      }

   }
   catch(err){
      yield put(reAddFailure(err))
   }
}

function* clearSync(){

   try{
      
      const result = yield fetch(`${api}/clear`)

      const res=yield result.json();

      if(res.error){
          yield put(clearFailure(res.error))
      }else{
         yield put(clearSuccess());
         yield put(getListStart())

      }

   }
   catch(err){
        yield put(clearFailure(err))
   }
}

function* saveToggleSync(payload){

   
   try{

  
      const {id,status}=payload.payload
      console.log(id,status)

      const result=yield fetch(`${api}/savetoggle`,{
         
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            
            status,
            id
         })
      });


      const res=yield result.json()


      if(res.error){
         yield put(saveToggleFailure(res.error))
      }else{
         yield put(saveToggleSuccess())
      }
   }
   catch(err){

      yield put(saveToggleFailure(err))

   }
}


function* statSync(){
   try{
      
      const result = yield fetch(`${api}/getstat`);

      const res=yield result.json();

      if(res.error){
         yield put(statFailure(res.error))
      }else{

         yield put(statSuccess(res.data))
      }

      

   }
   catch(err){
      yield put(statFailure(err))
   }
}

function* searchSync(payload){

   try{

      
      const {name} = payload.payload

      
      
      const result= yield fetch(`${api}/search`,{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            name:name
         })

         



      })


      const res=yield result.json();

      if(res.error){
         console.log(res)
         yield put(searchFailure(res.error))
      }

      yield put(searchSuccess(res.success))




   }
   catch(errr){

      yield put(searchFailure(errr))
   }

}


function* statStarts(){
   yield takeLatest("STAT_START",statSync)
}

function* GetItemStarts(){
   
   yield takeLatest("GET_ITEM_START",addItemSync);
}

function* addItemStarts(){
   yield takeLatest("ADD_ITEM_START",newItemSync)

}

function* addListStarts(){
   yield takeLatest("ADD_LIST_START",addListSync)
}

function* getListStarts(){
   yield takeLatest("GET_LIST_START",getListSync)
}

function* deleteFromListStatrts(){
   yield takeLatest("DELETE_FROM_LIST_START",deleteFromListSync)
}

function* deleteListStarts(){
   yield takeLatest("DELETE_LIST_START",deleteListSync)
}

function* switchStarts(){
   yield takeLatest("SWITCH_START",switchSync)
}

function* completeStarts(){
   yield takeLatest("COMPLETE_START",completeSync)
}

function* saveStarts(){
   yield takeLatest("SAVE_START",saveSync)
}

function* getSaveStarts(){
   yield takeLatest("GET_SAVE_START",getSaveSync)
}

function* getSingleStarts(){
   yield takeLatest("GET_SINGLE_START",getSingleSync)
}

function* readdStarts(){
   yield takeLatest("READD_START",reAddSync)
}

function* clearStarts(){
   yield takeLatest("CLEAR_START",clearSync)
}

function* saveToggeStarts(){
   yield takeLatest("SAVETOGGLE_START",saveToggleSync)
}

function* searchStarts(){
   yield takeLatest("SEARCH_START",searchSync)
}


function* ItemSaga(){
   yield all([call(searchStarts),call(statStarts),call(saveToggeStarts),call(clearStarts),call(readdStarts),call(getSingleStarts),call(getSaveStarts),call(saveStarts),call(completeStarts),call(switchStarts),call(deleteListStarts),call(GetItemStarts),call(addItemStarts),call(addListStarts),call(getListStarts),call(deleteFromListStatrts)]);
}




export default ItemSaga;