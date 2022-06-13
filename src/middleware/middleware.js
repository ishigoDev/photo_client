export const setToken = (token,email,id) =>{
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('id', id);
}
export const getToken=()=>{
    if(localStorage.getItem('token') !== null) {
        return localStorage['token'];
     }
     return null ;         
}

export const removeToken = () =>{
    if(localStorage.getItem('token') !== null) {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('id');        
     }
}
