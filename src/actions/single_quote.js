import {quoteDirectoryConst} from '../constant/quote_directory';
import axios from '../axios/axios.js';

export const single_quote_action = (userToken,data) =>{
    return (dispatch)=>{
        dispatch({type:quoteDirectoryConst.SINGLE_QUOTE_LOADING});
        const headers = { Authorization: `Bearer ${userToken}` };
        axios.post('/neutro-admin/single-quote/',data,{headers})
        .then(res=>{              
            if(res.status === 200){                                                
                dispatch({type:quoteDirectoryConst.SINGLE_QUOTE_SUCCESS,
                    payload:res.data
                });                                                                                
            }
        })
        .catch(error=>{                                                          
            if(error.response.status == 404){
                dispatch({type:quoteDirectoryConst.SINGLE_QUOTE_ERROR,                
                    payload:error.response
                });             
            }else{
                dispatch({type:quoteDirectoryConst.SINGLE_QUOTE_ERROR,                
                    payload:error                
                });             
            }
            
        })
    }
}

