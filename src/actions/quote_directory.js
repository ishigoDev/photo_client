import {quoteDirectoryConst} from '../constant/quote_directory';
import axios from '../axios/axios.js';

export const quote_form_action = (userToken,data) =>{
    return (dispatch)=>{
        dispatch({type:quoteDirectoryConst.QUOTED_LOADING});
        const headers = { Authorization: `Bearer ${userToken}` };
        axios.get('/neutro-admin/quotes?page='+data,{headers})
        .then(res=>{              
            if(res.status === 200){                
                dispatch({type:quoteDirectoryConst.QUOTED_SUCCESS,
                    payload:res.data
                });                                                                                
            }
        })
        .catch(error=>{                                        
            dispatch({type:quoteDirectoryConst.QUOTED_ERROR,
                    payload:error                
            });             
        })
    }
}
export const quote_bulk_action = (userToken , data) =>{
    return (dispatch)=>{   
        let bulk_body = {...data};         
        dispatch({type:quoteDirectoryConst.QUOTED_DELETED_LOADING});
        const headers = { Authorization: `Bearer ${userToken}` };
        axios.post('/neutro-admin/bulk-quotes-delete',bulk_body,{headers})
        .then(res=>{              
            if(res.status === 200){                
                dispatch({type:quoteDirectoryConst.QUOTED_DELETED_SUCCESS,
                    payload:res.data
                });                                                                                
            }
        })
        .catch(error=>{                                        
            dispatch({type:quoteDirectoryConst.QUOTED_ERROR,
                    payload:error                
            });             
        })
    }
}
