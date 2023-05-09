import {reactLocalStorage} from 'reactjs-localstorage';

const def={

    loading:false,
    Addnew:false,
    category:[],
    list:[],
    error:"",
    listCompleted:false,
    saved:[],
    singleItem:null,
    active:"",
    mobile:false,
    cart:false,
    tick:false,
    oneItem:null,
    id:"",
    edited:"",
    stat:null,
    search:null,
    toggleEdit:JSON.parse(reactLocalStorage.get('var',false) )
    
}

const itemReducer=(state=def,action)=>{

    switch(action.type){

    // case "toggleEdit":{
    //     return{
    //         ...state,
    //         toggleEdit:!state.toggleEdit
    //     }
    // }

    case "antitick":
        return{
            ...state,
            oneItem:null
        }
     case "tick":
        return{
            ...state,
            tick:!state.tick,
            cart:false,
            Addnew:false,
            oneItem:action.payload
        }

      case "cartClick":
        return{
            ...state,
            cart:!state.cart,
            tick:false,
            Addnew:false
        }

       case "mobileToggle":

       return{
        ...state,
        mobile:action.payload
       }
       case "addNewToggle":

       return{
        ...state,
        Addnew:!state.Addnew,
        cart:false,
        tick:false
       }

        case "GET_ITEM_START":

        return{

            ...state,
            loading:true,
            error:""
        }

        case "GET_ITEM_SUCCESS":
            return{
                ...state,
                category:action.data,
                loading:false,
                error:""
            }
        case "GET_ITEM_FAILURE":
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        case "ADD_ITEM_START":
            return{
                ...state,
                loading:true,
                error:""
            }

        case "ADD_ITEM_SUCCESS":

        
            return{
                 ...state,
                loading:false,
                error:"success"
                
            }

        case "ADD_ITEM_FAILURE":

            
            return{
                     ...state,
                    loading:false,
                    error:action.payload
            }

        case "ADD_LIST_START":
           
         return {
            ...state,
            loading:true,
            error:""
         }

         case "ADD_LIST_SUCCESS":

         return {
            ...state,
            loading:false,
            error:"success"
         }

         case "ADD_LIST_FAILURE":

         return {
            ...state,
            loading:false,
            error:action.payload
         }

         case "GET_LIST_START":

         return {
            ...state,
            loading:true,
            error:""
         }

         case "GET_LIST_SUCCESS":
            return {
                ...state,
               
                list:action.payload,
                loading:false,
                error:""
            }

        case "GET_LIST_FAILURE":
            return {
                ...state,
                loading:false,
                error:action.payload
            }

        case "DELETE_FROM_LIST_START":

        return{
            ...state,
            loading:true,
            error:""
        }

        case "DELETE_FROM_LIST_SUCCESS":

          return {
            ...state,
            loading:false,
            error:"success"
          }

        case "DELETE_FROM_LIST_FAILURE":

        return {
            ...state,
            loading:false,
            error:action.payload
        }

        case "DELETE_LIST_START":

        return {
            ...state,
            loading:true,
            error:""
        }

        case "DELETE_LIST_SUCCESS":
            return {
                ...state,
                loading:false,
                error:"success"
            }
        case "DELETE_LIST_FAILURE":
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        case "SWITCH_START":

        return{
            ...state,
            loading:true,
            error:""
        }

        case "SWITCH_SUCCESS":

        return{
            ...state,
            loading:false
        }

        case "SWITCH_FAILURE":

        return{
            ...state,
            loading:false,
            error:action.payload
        }

        case "COMPLETE_START":
            return{
                ...state,
                loading:true,
                error:""
            }
        
        case "COMPLETE_SUCCESS":
            return{
                ...state,
               
                listCompleted:action.payload,
                loading:false
                
            }
        
        case "COMPLETE_FAILURE":
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        
        case "SAVE_START":
            return{
                ...state,
                loading:true,
                error:""

            }

        case "SAVE_SUCCESS":
            
        return{
            ...state,
            loading:false,
            
            
            }

        case "SAVE_FAILURE":

        return{
            ...state,
            loading:false,
            error:action.payload
        }

        case "GET_SAVE_START":
            return{
                ...state,
                loading:true,
                error:""
            }
        
        case "GET_SAVE_SUCCESS":
            return{
                ...state,
                
                saved:action.payload,
                loading:false
            }
        
        case "GET_SAVE_FAILURE":
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        case "GET_SINGLE_START":
            return{
                ...state,
                loading:true,
                error:""
                
            }

        case "GET_SINGLE_SUCCESS":
            return{
                ...state,
                
                singleItem:action.payload,
                loading:false

            }
        
        case "GET_SINGLE_FAILURE":
            return{
               ...state,
               loading:false,
               error:action.payload
            }

        case "READD_START":
            return{
                ...state,
                loading:true,
                id:action.payload.id,
                error:""
            }

        case "READD_SUCCESS":
            return{
                ...state,
                loading:false
            }

        case "READD_FAILURE":
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        case "CLEAR_START":
            return{
                ...state,
                loading:true,
                error:""
            }

        case "CLEAR_SUCCESS":
            return{
                ...state,
                loading:false
            }

        case "CLEAR_FAILURE":
            return{
                ...state,
                loading:false
            }

       

        case "DEFAULT_CHANGE":

        
            return{
                ...state,
                loading:false,
                active:action.payload
                

            }

        case "SAVETOGGLE_START":
            return{
                ...state,
                loading:true,
                error:""

            }
        
        case "SAVETOGGLE_SUCCESS":
            return{
                ...state,
                loading:false
            }

        case "SAVETOGGLE_FAILURE":
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        case "EDIT_ITEM":
            return{
                ...state,
                edited:action.payload
            }

        case "STAT_START":
            return{
                ...state,
                loading:true,
                error:""
            }

        case "STAT_SUCCESS":
            return{
                ...state,
                
                stat:action.payload,
                loading:false,
                error:""
            }

        case "STAT_FAILURE":
            return{
                ...state,
                laoding:false,
                error:action.payload
            }

        case "SEARCH_START":
            return{
                ...state,
                loading:true,
                error:""
            }
        
        case "SEARCH_SUCCESS":
            return{
                ...state,
                
                error:"",
                search:action.payload,
                loading:false
            }
        
        case "SEARCH_FAILURE":
            return{
                ...state,
                loading:false,
                search:null,
                error:action.payload
               
            }

       
        default:
           return  state
    }
}

export default itemReducer;