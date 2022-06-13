import {React,useState,useEffect} from 'react';
import {     
    AppBar ,    
    withStyles,      
    Container ,
    Box,
    Button,
    Toolbar      
}from "@material-ui/core";
import header_style from '../../assets/css/Header';
import MenuSymbol from '../Header/MenuSymbol';
import {NavLink ,useLocation } from "react-router-dom";
function Header({classes}){
    const [menuClass, setMenuClass] = useState({mClass:false,fClass:false});
    const pages =['Portfolio','About','Contact','Get Quotes'];    
    const location = useLocation();
    useEffect(() => {
        setMenuClass({fClass:false,mClass:false}) ;
    }, [location])
    const  handlemenuMobile = () =>{                            
        setMenuClass({fClass:true,mClass:!menuClass.mClass});
    }
    const navLinkStyles = ({isActive}) =>{
        return {
            color:isActive ?'#BA3737':'white',
            textDecoration:'none',
        }
    }
        return( 
            <>
            <AppBar position="static">
                <Container maxWidth="xl" className={classes.neutro_header}>
                    <Toolbar disableGutters > 
                        <NavLink
                            to="/"
                            className ={classes.lgfnt}                                                        
                        >
                            Neutro Graphy                            
                        </NavLink>
                        <Box sx={{flexGrow:6}} />
                        <Box className={classes.header_menu} sx={{ display: { xs: 'block',sm:'block' ,md:'none',lg: 'none' }, width:'5%',justifyContent:'space-around',alignItems:'center' }}>                                                                                    
                            <div onClick={()=>{handlemenuMobile()}} >
                                <MenuSymbol  close ={menuClass.mClass ? true : false} />
                            </div>
                        </Box>
                        <Box className={classes.header_menu} sx={{ display: { xs: 'none', md: 'flex' }, width:'41%',justifyContent:'space-around',alignItems:'center' }}>                            
                            <Button                                
                                style={{color:'white',fontSize:'15px'}}                                                                
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                            <NavLink className={classes.navlink} style={navLinkStyles}  to='/'>Home</NavLink> 
                            </Button>
                            {pages.map((page) => (
                            <Button
                                key={page}
                                style={{color:'white',fontSize:'15px'}}                                                                
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                               <NavLink className={classes.navlink} style={navLinkStyles}  to={`/${page.replace(/ /g, "-").toLowerCase()}`}>{page}</NavLink> 
                            </Button>
                            ))}
                        </Box>                        
                        <Box className={ `${!menuClass.fClass?classes.header_mobile_menu_first: '' } ${classes.header_mobile_menu} ${menuClass.mClass ? classes.header_mobile_menu_show : classes.header_mobile_menu_hide}` }    >                            
                        <div className={classes.menu_div}>
                            <Button                                
                                style={{color:'white',fontSize:'18px'}}                                                                
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                            <NavLink style={{color:'white',textDecoration:'none'}}  style={navLinkStyles} to='/'>Home</NavLink> 
                            </Button>
                            {pages.map((page) => (
                            <Button
                                key={page}
                                style={{color:'white',fontSize:'18px'}}                                                                
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink style={{color:'white',textDecoration:'none'}} style={navLinkStyles}  to={`/${page.replace(/ /g, "-").toLowerCase()}`}>{page}</NavLink> 
                            </Button>
                            ))}
                        </div>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>            
            </>
        )
}
export default withStyles(header_style)(Header);