import React from 'react';
import {         
    withStyles,  
    Typography ,    
    Grid,
    Box,         
    Link   
}from "@material-ui/core";

import home_style from '../../assets/css/Home';

function Home({classes}) {    
    return (
        <>
          <Grid container component="main" className={classes.home_section}>
              <Grid item xs={12}  sm={12} md={12}  lg={7} className={classes.banner_area} >   
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={5} className={classes.site_area}>
                   <Box className={classes.site_intro}>
                        <Typography variant="h5" className={classes.banner_logo}> Neutro Graphy </Typography>
                        <div>
                        <Typography variant="h3" className={classes.customheadthree}> PHOTOGRAPHY </Typography>
                        <Typography variant="h3" className={classes.customheadthree}> STUDIO </Typography>
                        </div>
                        <Link href="/get-quotes" variant="h6" className={classes.Quotelink}>
                            Get Quote
                        </Link>                        
                    </Box> 
              </Grid>              
          </Grid>  
        </>
    )
}

export default withStyles(home_style)(Home)
