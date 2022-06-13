import React from 'react'
import {         
    Grid,    
    withStyles ,
    Drawer ,    
  }from "@material-ui/core";
  import {NavLink , useLocation , matchPath} from "react-router-dom";
  import  sidebar_style from '../../assets/css/Sidebar';  
  import {sidebar_actions} from '../../actions/sidebar.js'
  import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";     
  import { FiAirplay } from "react-icons/fi";  
  import { useDispatch } from "react-redux";  
  import { MdAddPhotoAlternate , MdOutgoingMail } from "react-icons/md";    
  import { BiPhotoAlbum } from "react-icons/bi";
function Sidebar({classes,...props}) {  
  const dispatch = useDispatch();
  let open_state_value = false;  
  if(props.open_state !== undefined) {
    open_state_value = props.open_state;
  }    
  const [open, setOpen] = React.useState(open_state_value);   
  const menuToggle = () =>{
        setOpen(!open);
        dispatch(sidebar_actions(open));
  }
  const location = useLocation();  
  let match = matchPath( {
    path: '/quote/:id',
    exact: true,
    strict: false
 },location.pathname) 
  const navLinkStyles = ({isActive}) =>{
    return {
        color:isActive ?'#BA3737':'white',
        textDecoration:'none',
    }
}
  return (
    <>        
    <Drawer className={classes.sidebar} variant="permanent" open={open}  anchor="left"  style={open ? {width:'90px'} : {width:'250px'} }>            
        <Grid container className={classes.menuListing}>
            <Grid item xs={12} className={classes.Arrowcls}>
                <div className={classes.collapseDiv} onClick={menuToggle}>                  
                  {open ? (<BsFillArrowRightCircleFill />) : (<BsFillArrowLeftCircleFill />)}                  
                </div>
            </Grid>         
            <Grid item xs={12} className={classes.submenuListing}>         
              <NavLink to="/admin-dashboard" state={{open:open}} className={classes.adminMenu}  style={navLinkStyles}   ><span className={classes.menuIcon}><FiAirplay/></span>Dashboard</NavLink>
              <NavLink to="/quotes-directory" state={{open:open}} className={match != null ?`${classes.adminMenu} ${classes.active}` : `${classes.adminMenu}`} style={navLinkStyles}><span className={classes.menuIcon}><MdOutgoingMail/></span>Quotes</NavLink>            
              <NavLink to="/photo-category" className={classes.adminMenu} style={navLinkStyles} > <span className={classes.menuIcon}><BiPhotoAlbum/></span>Photo Category</NavLink>                                                   
              <NavLink to="/photo" className={classes.adminMenu} style={navLinkStyles} > <span className={classes.menuIcon}><MdAddPhotoAlternate/></span>Photo Gallery</NavLink>                                                   
            </Grid>                
        </Grid>
    </Drawer>    
    </>
  )
}

export default withStyles(sidebar_style)(Sidebar)