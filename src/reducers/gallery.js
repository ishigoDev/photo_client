import {gallery} from '../constant/gallery.js';
const initState = {    
    error:false,
    success:false,
    loading:false,
    res_message:[],
};
const gallery_reduce = (state =initState , action) =>{    
    switch(action.type){
        case gallery.GALLERY_LOADING :
            state={
                ...state,
                loading:true,
                error:false,
                success:false,
                res_message:[],                
            }                               
            break;
        case gallery.GALLERY_SUCCESS :            
            state={
                ...state,                
                success:true,
                res_message:action.payload,
                error:false,
                loading:false,                
            }
            break;    
        case gallery.GALLERY_ERROR :        
            state={
                ...state,
                success:false,            
                error:true,  
                res_message:action.payload,              
                loading:false,                
            }
            break;
        case gallery.GALLERY_INTIAL :
            state={
                ...state,
                loading:false,
                error:false,
                success:false,
                res_message:[],                
            }                               
            break;
        default :   
         state ={...state}
        }
        return state       
}

export  {gallery_reduce};