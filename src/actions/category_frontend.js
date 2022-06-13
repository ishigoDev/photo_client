import {categroy_frontend} from '../constant/category_frontend.js';
import axios from '../axios/axios.js';

export const category_frontend_action = () =>{
    return (dispatch)=>{
        dispatch({type:categroy_frontend.CATEGORY_LOADING});
        axios.get('/neutro-admin/photo-category')
        .then(res=>{              
            if(res.status === 200){                                
                dispatch({type:categroy_frontend.CATEGORY_SUCCESS,
                    payload:res.data.message
                });                                                
            }
        })
        .catch(error=>{                                        
            dispatch({type:categroy_frontend.CATEGORY_ERROR,
                    payload:error                
            });             
        })
    }
}
