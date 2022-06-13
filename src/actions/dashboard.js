import {dashboardConst} from '../constant/dashboard';
import axios from '../axios/axios.js';

export const dashboard_action = (userToken) =>{
    return (dispatch)=>{
        dispatch({type:dashboardConst.DASHBOARD_LOADING});
        const headers = { Authorization: `Bearer ${userToken}` };
        axios.get('/neutro-admin/dashboard-quote-analysis/',{headers})
        .then(res=>{              
            if(res.status === 200){                                                
                dispatch({type:dashboardConst.DASHBOARD_SUCCESS,
                    payload:res.data
                });                                                                                
            }
        })
        .catch(error=>{                                                                      
                dispatch({type:dashboardConst.DASHBOARD_ERROR,                
                    payload:error                
                });                                     
        })
    }
}

