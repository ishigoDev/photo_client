import React ,{useEffect} from 'react'
import {     
    withStyles,      
    Grid  ,
    Typography    
}from "@material-ui/core";
import categoryFrontend_style from '../../assets/css/CategoryFrontend';
import { useDispatch, connect } from "react-redux";
import {category_frontend_action} from '../../actions/category_frontend.js';
import {Link} from 'react-router-dom';
import Loader from '../Loader/Loader';
function CategoryFrontend({classes,...props}){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(category_frontend_action());
    },[])        
  return (
    <>
        <Grid container component="main" className={classes.categoryfrontend}>
            <Grid item xs={12}  sm={12} md={12}  lg={12} xl={12} className={classes.banner_section} >   
                <Typography variant="h3" style={{letterSpacing:'6px',fontWeight:'600',color:'#BA3737'}}>PORTFOLIO</Typography>
            </Grid> 
            <Grid item xs={12} sm={12} md={12}  lg={12} xl={12} className={classes.categories_sections}>                               
                {props.categoryFrontend.loading && props.categoryFrontend.success !== true ? (<Grid item xs={12} sm={12} md={12}  lg={12} xl={12} className={classes.photo_category}>
                    <div className={classes.category_img_container}>                        
                        <Loader loaderClass={classes.loaderClass} display ={props.categoryFrontend.loading === true ? 'block':'none'} spinnerImg={classes.spinnerImg} />
                    </div>                    
                </Grid>) : props.categoryFrontend.res_message.map(category =>(
                    <Grid item xs={12} sm={12} md={12}  lg={12} xl={12} className={classes.photo_category}>
                    <div className={classes.category_img_container}>                        
                        <img effect='blur' src={category.imgDirectory} className={classes.category_img} />
                        <div className={classes.overlay}>                            
                            <div className={classes.img_text}>
                                <Link to={category.permalink} className={classes.category_link}>{category.title}</Link>
                            </div>
                        </div>
                    </div>                    
                </Grid>                    
                ))  }
                
            </Grid> 
        </Grid>
    </>
  )
}

const mapStateToProps = (state) => ({
    categoryFrontend: state.category_frontend,
  });

export default connect(mapStateToProps)(withStyles(categoryFrontend_style)(CategoryFrontend))