import {quoteConst} from '../constant/quote';
const initState = {    
    error:false,
    success:false,
    loading:false,
    res_message:'',
};
const quoteForm = (state =initState , action) =>{    
    switch(action.type){
        case quoteConst.QUOTE_FORM_SAVING :
            state={
                ...state,
                loading:true,
                error:false,
                success:false,
                res_message:'',                
            }                               
            break;
        case quoteConst.QUOTE_FORM_SAVED :            
            state={
                ...state,                
                success:true,
                res_message:action.payload,
                error:'',
                loading:false,                
            }
            break;    
        case quoteConst.QUOTE_FORM_ERROR :        
            state={
                ...state,
                success:'',            
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
export { quoteForm };