import {quoteDirectoryConst} from '../constant/quote_directory';
const initState = {    
    error:false,
    success:false,
    loading:false,    
    res_message:[],    
};
const quoteSingleDirectory = (state =initState , action) =>{    
    switch(action.type){
        case quoteDirectoryConst.SINGLE_QUOTE_LOADING :
            state={
                ...state,
                loading:true,
                error:false,
                success:false,
                res_message:[],                
            }                               
            break; 
        case quoteDirectoryConst.SINGLE_QUOTE_SUCCESS :            
            state={
                ...state,                
                success:true,
                res_message:action.payload,
                error:false,
                loading:false,                
            }
            break;      
        case quoteDirectoryConst.SINGLE_QUOTE_ERROR :        
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

export { quoteSingleDirectory  };