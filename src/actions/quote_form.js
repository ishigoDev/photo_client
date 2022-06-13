import {quoteConst} from '../constant/quote.js';
import axios from '../axios/axios.js';

export const quote_form_action = (quoteData,onResponse) =>{
    return (dispatch)=>{
        dispatch({type:quoteConst.QUOTE_FORM_SAVING});
        axios.post('/neutro/quotes-form',{
            ...quoteData
        })
        .then(res=>{              
            if(res.status === 200){
                dispatch({type:quoteConst.QUOTE_FORM_SAVED,
                    payload:res.data
                });                                                
                onResponse('success')            
            }
        })
        .catch(error=>{                                        
            dispatch({type:quoteConst.QUOTE_FORM_ERROR,
                    payload:error                
            });             
        })
    }
}