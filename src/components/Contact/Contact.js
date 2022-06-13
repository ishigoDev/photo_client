import React from 'react'
import {     
    withStyles,  
    Typography ,    
    Box,    
    Grid      ,
    Link
}from "@material-ui/core";
import contact_style from '../../assets/css/Contact';
function Contact({classes}) {
    return (
        <>          
        <Grid container component="main" className={classes.contact}>
            <Grid item xs={12}  sm={12} md={12}  lg={12} xl={12} className={classes.banner_section} >   
                <Typography variant="h3">GIVE US A NUDGE</Typography>
            </Grid>             
            <Grid item xs={12}  sm={12} md={12}  lg={12} xl={12}  style={{display:'flex',marginBottom:'40px'}} >   
                <Grid item xs={1}  sm={2} md={2}  lg={3} xl={4} ></Grid>
                <Grid item xs={10}  sm={8} md={8}  lg={6} xl={4} style={{textAlign:'center'}}><Typography variant="body1" className={classes.bodyFamily} style={{fontSize:'22px',textTransform:'uppercase',}}> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </Typography></Grid>
                <Grid item xs={1}  sm={2} md={2}  lg={3} xl={4} ></Grid>                
            </Grid>             
            <Grid item xs={12}  sm={12} md={12}  lg={12} xl={12} className={classes.contact_section} >                   
                <Grid item xs={12}  sm={12} md={12}  lg={12} xl={6} className={classes.contact_image} >
                    <img className={classes.site_ownerpic} src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="contact img"/>
                </Grid>
                <Grid item xs={12}  sm={12} md={12}  lg={12} xl={6} style={{textAlign:'center'}} className ={classes.contact_information}>
                    <Box className={classes.contact_main_section}>
                        <Box sx={{marginTop:'40px'}} className={classes.cont_detail}>
                            <Typography variant="h6" className={classes.social_head}> ADDRESS   </Typography>
                            <Typography variant="body1" className={classes.bodyFamily}> AWADHPURI , BHOPAL   </Typography>
                        </Box>
                        <Box className={classes.cont_detail}>
                            <Typography variant="h6" className={classes.social_head}> NUMBER   </Typography>
                            <Link href="#" className={classes.social_link}> +91898912824   </Link>
                        </Box>    
                    </Box>                    
                    <Box className={classes.contact_main_section}>
                        <Box sx={{marginTop:'40px'}} className={classes.cont_detail,classes.cont_detail_res}>
                            <Typography variant="h6" className={classes.social_head}> EMAIL   </Typography>
                            <Link href="#" className={classes.social_link}> SAMPLE@GMAIL.COM   </Link>
                        </Box>
                        <Box className={classes.cont_detail}>
                            <Typography variant="h6" className={classes.social_head}> SOCIAL    </Typography>
                            <Typography variant="body1" className={classes.bodyFamily}> SAMPLE@GMAIL.COM   </Typography>
                        </Box>
                    </Box>                    
                </Grid>                
            </Grid>             

        </Grid>
        </>
    )
}

export default  withStyles(contact_style)(Contact)
