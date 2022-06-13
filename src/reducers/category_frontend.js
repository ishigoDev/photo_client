import {categroy_frontend} from '../constant/category_frontend.js';
const initState = {    
    error:false,
    success:false,
    loading:false,
    res_message:[],
};
const category_frontend = (state =initState , action) =>{    
    switch(action.type){
        case categroy_frontend.CATEGORY_LOADING :
            state={
                ...state,
                loading:true,
                error:false,
                success:false,
                res_message:'',                
            }                               
            break;
        case categroy_frontend.CATEGORY_SUCCESS :            
            state={
                ...state,                
                success:true,
                res_message:action.payload,
                error:false,
                loading:false,                
            }
            break;    
        case categroy_frontend.CATEGORY_ERROR :        
            state={
                ...state,
                success:false,            
                error:true,  
                res_message:action.payload,              
                loading:false,                
            }
            break;
        default :   
         state ={...state}
        }
        return state       
}

export  {category_frontend};