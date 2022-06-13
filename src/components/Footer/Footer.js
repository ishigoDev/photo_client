import React from 'react';
import {         
    withStyles,  
    Typography ,
    Link,
    Grid,
    Box
}from "@material-ui/core";
import footer_style from '../../assets/css/Footer';
function Footer({classes}) {
    var currentTime = new Date(); 
    var year  = currentTime.getFullYear();
    return (
        <>
            <footer className ={classes.footer}>    
                <Grid container component="main" className= {classes.footerContainer}>
                    <Grid item className={classes.copyright_area}>
                        <Box>
                            <Typography variant="body1" className={classes.bodyFamily}>© { year } by Neutro Graphy .</Typography>
                        </Box>    
                    </Grid>
                    <Grid item className={classes.social_area}>
                        <Box>
                            <Link href="https://www.facebook.com/login/" variant="body1" className={classes.social_link}>
                                Facebook
                            </Link>                            
                        </Box>    
                        <Box>
                            <Link href="https://twitter.com/login?lang=en" variant="body1" className={classes.social_link}>Twitter </Link>
                        </Box>    
                        <Box>
                            <Link href="https://www.instagram.com/?hl=en" variant="body1" className={classes.social_link}>Instagram </Link>
                        </Box>    
                    </Grid>                    
                </Grid>                
            </footer>
        </>
    )
}

export default withStyles(footer_style)(Footer)
