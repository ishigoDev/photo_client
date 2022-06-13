import React, { useState ,useEffect } from 'react'
import {     
    AppBar ,    
    withStyles,      
    Container ,
    Box,
    Button,
    Toolbar,      
    Typography,
    Paper
}from "@material-ui/core";
import admin_header_Style from '../../assets/css/AdminHeader'
import {Link, NavLink ,useNavigate } from "react-router-dom";
import {IoPersonCircleSharp} from "react-icons/io5";  
import {removeToken,getToken} from '../../middleware/middleware';
import {admin_header_action} from '../../actions/admin_login.js';
import { useDispatch, connect } from "react-redux";

function AdminHeader({classes,...props}) {
    const  navigate =useNavigate();
    
    const dispatch = useDispatch();    
    
    const [profileModal,setProfileModal] = useState(false);        
    useEffect(()=>{
        dispatch(admin_header_action(getToken()));
    },[])
    useEffect(()=>{
        if(props.user.error  && props.user.res_message == -1){            
            removeToken();
            navigate('/admin-access/?error=1');
        }
        if(props.user.error  && props.user.res_message == 1){            
            removeToken();
            navigate('/admin-access/?error=2');
        }
    },[props.user]);    
    const onHoverFunc = () =>{       
        setProfileModal(!profileModal);
    }        
    const logOut =  () =>{
        removeToken();        
        window.location.reload();
    }
    
  return (
    <AppBar position="static">
    <Container maxWidth="xl"  className={classes.neutro_header}>
        <Toolbar disableGutters>            
            <NavLink className ={classes.lgfnt} to="/" >Neutro Graphy</NavLink>
            <Box sx={{flexGrow:6}} />                                    
            <Box className={classes.header_menu} sx={{ display: { xs: 'none', md: 'flex' }, width:'41%',justifyContent:'space-around',alignItems:'center' }}>                                            
                <Button                                
                    style={{color:'white',fontSize:'15px',marginTop:'2px'}}                                                                
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    onMouseEnter={onHoverFunc}
                    onClick={onHoverFunc}                    
                >                
                    <Typography variant="p">Evince Dev </Typography>                                                 
                    <IoPersonCircleSharp className={classes.loginIcon} />                                        
                </Button>               
                <Paper className={classes.profileModal} style={profileModal ? {display:'block'}:{display:'none'}} >                    
                        <Typography variant="p" className={classes.profileText}><Link to="admin-profile" style={{color:'rgb(186, 55, 55)'}}>Evince dev</Link></Typography>                                                                         
                        <Typography variant="p" className={classes.profileText}><Link to="admin-profile">Edit profile</Link></Typography>                                                                         
                        <Typography variant="p" className={classes.profileText}><Link to="#" onClick={logOut}>Log Out </Link></Typography>                                                                                                                     
                </Paper> 
            </Box>                                                                                      
        </Toolbar>
    </Container>
</AppBar>         
  )
}

const mapStateToProps = (state) => ({    
    user: state.adminHeader,    
  });
export default connect(mapStateToProps)(withStyles(admin_header_Style)(AdminHeader));