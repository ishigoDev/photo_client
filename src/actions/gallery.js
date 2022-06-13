import {gallery} from '../constant/gallery.js'
import axios from '../axios/axios.js';

export const gallery_action = (data,page) =>{
    return (dispatch)=>{
        dispatch({type:gallery.GALLERY_LOADING});
        axios.post('/neutro-admin/photogallery/?page='+page,{
            permalink:data
        })
        .then(res=>{                                                   
            if(res.status === 200){     
                dispatch({type:gallery.GALLERY_SUCCESS,
                    payload:res.data
                });                         
                
            }
        })
        .catch(error=>{                                        
            dispatch({type:gallery.GALLERY_ERROR,
                    payload:error                
            });             
        })
    }
}
export const gallery_intial =()=>{
    return (dispatch)=>{
        dispatch({type:gallery.GALLERY_INTIAL})    ;                                   
    }
}