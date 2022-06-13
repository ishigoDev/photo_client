import {dashboardConst} from '../constant/dashboard';
const initState = {    
    error:false,
    success:false,
    loading:false,
    res_message:[],
};
const dashboard = (state =initState , action) =>{    
    switch(action.type){
        case dashboardConst.DASHBOARD_LOADING :
            state={
                ...state,
                loading:true,
                error:false,
                success:false,
                res_message:[],                
            }                               
            break;
        case dashboardConst.DASHBOARD_SUCCESS :            
            state={
                ...state,                
                success:true,
                res_message:action.payload,
                error:false,
                loading:false,                
            }
            break;    
        case dashboardConst.DASHBOARD_ERROR :        
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
export { dashboard };