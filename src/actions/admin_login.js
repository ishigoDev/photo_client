import {adminConst} from '../constant/admin_login.js';
import axios from '../axios/axios.js';
import crypto from 'crypto';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const  encrypt = (text) => {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') , "key" : key.toString('hex') };
 }
export const admin_login_action = (adminLoginData) =>{    
    return (dispatch)=>{
        dispatch({type:adminConst.ADMIN_LOGIN_LOADING});
        const encrypted_data = encrypt(adminLoginData.password);        
        axios.post('/neutro-admin/login',{email:adminLoginData.email,password:encrypted_data})
        .then(res=>{                
            if(res.status === 200){
                dispatch({type:adminConst.ADMIN_LOGIN_SUCCESS,
                    payload:res.data
                });                                                
            }            
        })
        .catch(error=>{               
            console.log(error);   
            dispatch({type:adminConst.ADMIN_LOGIN_ERROR,
                payload:error.response.data
            });            
        })
    }
}
export const admin_header_action = (userToken) =>{        
    return (dispatch)=>{        
        dispatch({type:adminConst.ADMIN_HEADER_RQ});        
        const headers = { Authorization: `Bearer ${userToken}` };
        axios.get('/neutro-admin/admin-header',{headers})
        .then(res=>{                
            if(res.status === 200){                
                dispatch({type:adminConst.ADMIN_HEADER_SC,
                    payload:res.data
                });                                                
            }            
        })
        .catch(error=>{                       
            if(error.response.status === 401){
                dispatch({type:adminConst.ADMIN_HEADER_RJ,
                    payload:error.response.data.profile_error
                });  
            }else{
                dispatch({type:adminConst.ADMIN_HEADER_RJ,
                    payload:'SomeError Occurred'
                });  
            }
                      
        })
    }
}