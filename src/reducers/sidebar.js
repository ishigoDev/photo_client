import {sidebarConst} from '../constant/sidebar.js';
const initState = {    
    sidebar_status : true,
};
const sideBar = (state =initState , action) =>{    
    switch(action.type){
        case sidebarConst.SIDEBAR_IN :
            state={                
                sidebar_status : false,               
            }                               
            break;
        case sidebarConst.SIDEBAR_OUT :            
            state={
                sidebar_status : true,               
            }
            break;         
        default :   
         state ={...state}
        }
    return state       
}
export { sideBar };