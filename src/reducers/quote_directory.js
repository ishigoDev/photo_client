import {quoteDirectoryConst} from '../constant/quote_directory';
const initState = {    
    error:false,
    success:false,
    loading:false,
    delete_success:false,
    res_message:[],
    bulk_delete_message:[],
};
const quoteDirectory = (state =initState , action) =>{    
    switch(action.type){
        case quoteDirectoryConst.QUOTED_LOADING :
            state={
                ...state,
                loading:true,
                error:false,
                success:false,
                res_message:[],                
            }                               
            break;
        case quoteDirectoryConst.QUOTED_DELETED_LOADING :
            state={
                ...state,
                loading:true,
                error:false,
                delete_success:false,
                success:false,    
                bulk_delete_message:[],                        
            }                               
            break;
        case quoteDirectoryConst.QUOTED_SUCCESS :            
            state={
                ...state,                
                success:true,
                res_message:action.payload,
                error:false,
                loading:false,   
                delete_success:false ,
            }
            break;    
        case quoteDirectoryConst.QUOTED_DELETED_SUCCESS :            
            state={
                ...state,                                
                bulk_delete_message:action.payload,
                error:false,
                loading:false,                
                delete_success:true,
            }
            break;    
        case quoteDirectoryConst.QUOTED_ERROR :        
            state={
                ...state,
                success:false,   
                delete_success:false,         
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

export { quoteDirectory  };