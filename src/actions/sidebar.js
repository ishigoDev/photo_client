import {sidebarConst} from '../constant/sidebar.js';

export const sidebar_actions = (sideBar_status) =>{
    return (dispatch)=>{        
        if(sideBar_status){
            dispatch({type:sidebarConst.SIDEBAR_OUT})
        }else{
            dispatch({type:sidebarConst.SIDEBAR_IN})
        }
    }
}