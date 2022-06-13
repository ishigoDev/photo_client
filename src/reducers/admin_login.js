import {adminConst} from '../constant/admin_login.js';
const initState = {    
    error:false,
    success:false,
    loading:false,
    res_message:'',
};
const initHeaderState = {    
    error:false,
    success:false,
    loading:false,
    res_message:'',
};
const adminLogin = (state =initState , action) =>{    
    switch(action.type){
        case adminConst.ADMIN_LOGIN_LOADING :
            state={
                ...state,
                loading:true,
                error:false,
                success:false,
                res_message:'',                
            }                               
            break;
        case adminConst.ADMIN_LOGIN_SUCCESS :            
            state={
                ...state,                
                success:true,
                res_message:action.payload,
                error:false,
                loading:false,                
            }
            break;    
        case adminConst.ADMIN_LOGIN_ERROR :        
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
const adminHeader = (state =initHeaderState , action) =>{    
    switch(action.type){
        case adminConst.ADMIN_HEADER_RQ :
            state={
                ...state,
                loading:true,
                error:false,
                success:false,
                res_message:'',                
            }                               
            break;
        case adminConst.ADMIN_HEADER_SC :            
            state={
                ...state,                
                success:true,
                res_message:action.payload,
                error:false,
                loading:false,                
            }
            break;    
        case adminConst.ADMIN_HEADER_RJ:        
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


export { adminLogin , adminHeader };