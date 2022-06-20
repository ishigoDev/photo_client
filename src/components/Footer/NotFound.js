import React from 'react';
import {         
    withStyles,  
    Typography ,
    Link,
    Grid,
    Box
}from "@material-ui/core";
import about_style from '../../assets/css/About';
function NotFound({classes}) {
  return (
    <>
        <Grid container component="main" className={classes.about}>
            <Grid item xs={12}  sm={12} md={12}  lg={12} xl={12} className={classes.banner_section} >   
                <Typography variant="h3" style={{letterSpacing:'6px',fontWeight:'600',color:'#BA3737'}} >Not Found</Typography>
            </Grid> 
            <Grid item xs={12}  sm={12} md={12}  lg={12} xl={12} className={classes.notfound_section} >   
                <Typography variant="body" className={classes.not_found} >404!</Typography>
            </Grid> 
        </Grid>
        </>        
  )
}

export default withStyles(about_style)(NotFound)