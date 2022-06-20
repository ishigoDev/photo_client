import React from 'react';
import {     
    withStyles,  
    Typography ,    
    Box,    
    Grid      
}from "@material-ui/core";
import about_style from '../../assets/css/About';
function About({classes}) {
    return (
        <>
        <Grid container component="main" className={classes.about}>
            <Grid item xs={12}  sm={12} md={12}  lg={12} xl={12} className={classes.banner_section} >   
                <Typography variant="h3" style={{letterSpacing:'6px',fontWeight:'600',color:'#BA3737'}}>ABOUT</Typography>
            </Grid> 
            <Grid item xs={12} sm={12} md={12}  lg={12} xl={12} className={classes.about_section}  >   
                <Grid container xs={12} sm={12} md={12} xl={12}  lg={12}>
                    <Grid item lg={6} xs={6}  xs={12} sm={12} md={12} className={classes.site_owner}  >
                        <Box className={classes.site_owner_container}>
                            <img className={classes.site_ownerpic} src="https://images.unsplash.com/photo-1635080771840-e6f0d134f173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="About us"/>
                        </Box>
                    </Grid>
                    <Grid item lg={6} xs={6} xs={12} sm={12} md={12} className={classes.about_matter} >
                        <Typography variant="h4" style={{color:'white',marginBottom:'35px'}}>
                            Andrew Haden
                        </Typography>
                        <Typography variant="body1" sx={{color:'white'}}  className={classes.bodyFamily}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid> 
            <Grid item xs={12} sm={12} md={12}  lg={12} xl={12} className={classes.about_section_extend}  >   
                <Typography variant="h4" style={{color:'white',marginBottom:'35px'}}>
                        Events Handle
                </Typography>
                <Typography variant="body1" sx={{color:'white'}}  className={classes.bodyFamily}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
            </Grid> 
            <Grid item xs={12} sm={12} md={12}  lg={12} xl={12} className={classes.about_section_2}  >                   
                    <Box className={classes.site_owner_container}>
                            <img className={classes.site_ownerpic_2} src="https://images.unsplash.com/photo-1635080771840-e6f0d134f173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="About us" />
                    </Box>
                    <Box className={classes.site_owner_container}>
                            <img className={classes.site_ownerpic_2} src="https://images.unsplash.com/photo-1635080771840-e6f0d134f173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="About us" />
                    </Box>
                    <Box className={classes.site_owner_container}>
                            <img className={classes.site_ownerpic_2} src="https://images.unsplash.com/photo-1635080771840-e6f0d134f173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="About us" />
                    </Box>
            </Grid> 
            <Grid item xs={12} sm={12} md={12}  lg={12} xl={12} className={classes.about_section_spacing}  >                   
            </Grid> 
        </Grid>
        </>        
    )
}

export default withStyles(about_style)(About);
