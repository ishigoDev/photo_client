import React, { useEffect } from 'react'
import {       
  Grid, 
  Container, 
  Typography,
  withStyles, Paper
}from "@material-ui/core";
import Sidebar from './Sidebar';
import quotes_directory from '../../assets/css/QuotesDirectory.js';
import {useLocation} from "react-router-dom";
import {getToken} from '../../middleware/middleware';
import {useDispatch ,connect } from "react-redux";  
import {dashboard_action} from '../../actions/dashboard.js';
import { BsArrowUpCircleFill, BsArrowUpCircle } from "react-icons/bs";
import Loader from '../Loader/Loader';
function Dashboard({classes,...props}) {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(()=>{
      dispatch(dashboard_action(getToken()));
  },[]);
  let open_state;  
if(location.state  == null){
  open_state = false;
}else{
  open_state = location.state.open
}
console.log(props.dashboard);
  return (
    <>
    <Grid container>
      <Grid item xs={0.5}>
          <Sidebar  open_state={open_state}  />
      </Grid>
      <Grid item xs={11.5} style={{width:'1200px' , height:'700px'}}>
      <Container className={classes.quotes_directory_container } style={props.sidebar ? {marginLeft:'0px'} : {marginLeft:'50px'} } maxWidth="lg">
              <div className={classes.quotes_directory_heading}>
                <Typography variant='h5'>Dashboard</Typography>
              </div>     
              <div className={classes.dashboard_area}>
                <Grid container>
                  <Grid xs={12}>
                    <Paper className={classes.paper_ddetails}>
                        <div style={{display:'flex'}}>
                            <Typography variant="h6"  style={{marginRight:'10px' , color:'white'}}>Quote Analytics </Typography> 
                        </div> 
                        {props.dashboard.loading ? <Loader spinnerImg={classes.loader_anal_img} loaderClass={classes.loader_anayltics} display={props.dashboard.loading ? 'block': 'none' } /> : (
                          <div className={classes.quoteAContainer}>
                            <Typography variant="body1"  style={{marginRight:'10px' , color:'white'}}>Total Quotes :  </Typography>                             
                            {props.dashboard_success ? (<Typography variant="body1"  style={{marginRight:'10px' , color:'white',marginBottom:'10px',fontSize:'30px'}}>{props.dashboard.res_message.count}  </Typography> ) : (<Typography variant="body1"  style={{marginRight:'10px' , color:'white'}}>Something went wrong !</Typography> ) }                            
                            <Typography variant="body1"  style={{marginRight:'10px' , color:'white'}}>Today Added :  </Typography> 
                            <div style={{display:'flex',alignItems:'center', width:'100%',height:'50px'}}>
                              {props.dashboard_success ? (<Typography variant="body1"  style={{marginRight:'10px' , color:'white', fontSize:'30px'}}>{props.dashboard.res_message.todayCount}  </Typography> ) : (<Typography variant="body1"  style={{marginRight:'10px' , color:'white'}}>Something went wrong !</Typography> ) }                            
                              {props.dashboard.res_message.todayCount > 0 ? (<BsArrowUpCircleFill style={{color:'white',fontSize:'25px'}} / >) : (<BsArrowUpCircle style={{color:'white',fontSize:'25px'}} / > ) }                            
                            </div>
                        </div>                                                                 
                        )}
                        
                    </Paper>                
                  </Grid>                                                                   
                </Grid>
              </div>               
            </Container>

      </Grid>
    </Grid>
    </>
  )
}

const mapStateToProps = (state) => ({      
  dashboard_success: state.dashboard.success,
  dashboard: state.dashboard
});

export default connect(mapStateToProps)(withStyles(quotes_directory)(Dashboard))