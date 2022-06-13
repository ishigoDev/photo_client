import React,{useState,useEffect} from 'react'
import {     
    withStyles,  
    Typography ,    
    Box,    
    Grid,
    Button ,
    TextField
}from "@material-ui/core";
import admin_Style from '../../assets/css/Admin';
import { useDispatch, connect } from "react-redux";
import {admin_login_action} from '../../actions/admin_login';
import {setToken,getToken} from '../../middleware/middleware';
import Loader from '../Loader/Loader';
import { useNavigate , useLocation} from 'react-router-dom';
function Admin({classes,...props}) {    
    const dispatch = useDispatch();
    const intialState = {email:'',password:''};    
    const intialState_error = {email:'',password:'',message:''};
    const [adminDetail , setAdminDetail] = useState(intialState);
    const [error, setError] = useState(intialState_error);          
    const urlQuery = new URLSearchParams(useLocation().search);    
        let urlError = urlQuery.get('error');        
    const formValid = (userdata) =>{        
        let error_callback = false;
          let errors ={};                  
          if(!userdata.email.trim()){
            error_callback=true;
            errors.email ="Email Required *";          
          }else if(userdata.email){
            if (/\S+@\S+\.\S+/.test(userdata.email))
              {
                error_callback=false;                
              }else{
                error_callback = true;
                errors.email ="Email is invalid *";          
              }              
          }
          if(!userdata.password.trim()){
            error_callback=true;
            errors.password ="Password Required *";          
          }                   
          setError({...errors});        
          return error_callback;
    }
    const loginAdmin = ()=>{
        if(!formValid(adminDetail)){
            setError(intialState);            
            dispatch(admin_login_action(adminDetail));
        }
    }     
    const navigate = useNavigate();
    useEffect(()=>{
        if(props.adminLoginRes.error){
            setError({...error,...props.adminLoginRes.res_message})            
        }else{
            setError(intialState_error)            
        }
        if(props.adminLoginRes.success){
            setToken(props.adminLoginRes.res_message.token,props.adminLoginRes.res_message.user.email,props.adminLoginRes.res_message.user._id);
            navigate('/admin-dashboard');            
        }
    },[props.adminLoginRes.error,props.adminLoginRes.success,props.adminLoginRes.loading])    
    return (
        <>
            <Grid container component="main" className={classes.admin_access}>
                <Grid item xs={12}  sm={12} md={12}  lg={12} xl={12} className={classes.banner_section} >   
                    <Typography variant="h3">ADMIN ACCESS</Typography>                    
                </Grid>   
                {urlQuery != null ? 
                (<Grid item xs={12}  sm={12} md={12}  lg={12} xl={12} className={classes.error_section_1} >   
                    <Typography variant="p">{urlError == 1 ? "Session Expired . Please login in again ." : '' } {urlError == 2 ? "Authoriztion Required . Please login with correct credentials ." : '' }</Typography>                    
                </Grid>) : ''}
                {props.adminLoginRes.error ? 
                (<Grid item xs={12}  sm={12} md={12}  lg={12} xl={12} className={classes.error_section_1} >   
                    <Typography variant="p">{error.message}</Typography>                    
                </Grid>) : ''}
                <Grid item xs={12}  sm={12} md={12}  lg={12} xl={12} className={classes.login_section} >                                               
                    <Box className={classes.login_box}>                        
                        <form className={classes.quotes_form}>                       
                            <div className={classes.form_prt1}>
                                <i class="fas fa-user-shield"></i>
                                <Typography variant="h6"> Admin Login </Typography>                                
                            </div>
                            <div className={classes.form_prt2}>
                                <p>Email </p>
                                <TextField className={classes.input_cls} type="text"
                                {...(error.email !=='' && error.email !== undefined?({error:true}):(''))}                  
                                 onChange={(e)=>{
                                    setAdminDetail({
                                        ...adminDetail,
                                        email:e.target.value
                                    })
                                    setError({...error,email:''})                                    
                                }}
                                helperText={error.email}                                            
                                 />                  
                            </div>
                            <div className={classes.form_prt2}>
                                <p>Password </p>
                                <TextField className={classes.input_cls} type="password"
                                {...(error.password !=='' && error.password !== undefined?({error:true}):(''))}                  
                                 onChange={(e)=>{
                                    setAdminDetail({
                                        ...adminDetail,
                                        password:e.target.value
                                    })
                                    setError({...error,password:''})                                    
                                }}
                                helperText={error.password}                                            
                                 />                  
                            </div>
                            <div className={classes.form_prt2}>
                                <Button variant="contained" className={classes.form_button} onClick={loginAdmin} style ={ props.adminLoginRes.loading ? {fontSize:'0px',height:'50px'} :{fontSize:'inherit'} } disabled={props.adminLoginRes.loading}>Submit</Button>
                                <Loader loaderClass={classes.loaderClass} display ={props.adminLoginRes.loading ? 'block':'none'} spinnerImg={classes.spinnerImg} />
                            </div>
                        </form>                    
                    </Box>
                </Grid>                  
            </Grid>
        </>
    )
}
const mapStateToProps = (state) => ({
    adminLoginRes: state.adminLogin,
  });
export default connect(mapStateToProps)(withStyles(admin_Style)(Admin))
