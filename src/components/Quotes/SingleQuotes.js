import React ,{useEffect} from 'react';
import Sidebar from '../Dashboard/Sidebar';
import {getToken} from '../../middleware/middleware';
import {single_quote_action} from '../../actions/single_quote';
import {useDispatch ,connect } from "react-redux";  
import {Grid ,Container , withStyles , Typography , Paper,Link}from "@material-ui/core";
import quotes_directory from '../../assets/css/QuotesDirectory.js';
import {useParams , useNavigate} from "react-router-dom";

function SingleQuotes({classes,...props}) {    
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let data = {id:useParams().id};  
  let open_state = props.sidebar;    
  useEffect(()=>{
    dispatch(single_quote_action(getToken(),data));
  },[])
  if(props.singleQuote_check.res_message.status !=undefined && props.singleQuote_check.res_message.status === 404){
    navigate('/quotes-directory/?error=1');
  }
  return (
    <>    
        <Grid container>
          <Grid item xs={0.5}>
            <Sidebar open_state={!open_state}  />
          </Grid> 	                                
          <Grid item xs={11.5} style={{width:'1200px' , height:'700px'}}>
            <Container className={classes.quotes_directory_container } style={props.sidebar ? {marginLeft:'0px'} : {marginLeft:'50px'} } maxWidth="lg">
              <div className={classes.quotes_directory_heading}>
                <Typography variant='h5'>Quotes Details</Typography>
              </div>
              {props.singleQuote.quote !== undefined ? (<div className={classes.quotes_detail}>
                  <div className={classes.user_details}>
                      <Grid container>
                        <Grid xs={12}>
                        <Paper className={classes.paper_udetails}>
                            <div style={{display:'flex'}}>
                                <Typography variant="body1"  style={{fontWeight:'600' ,marginRight:'10px'}}>Full Name : </Typography>  <Typography variant="body1"> {props.singleQuote.quote.full_name}</Typography>
                            </div>
                            <div style={{display:'flex'}}>
                                <Typography variant="body1" style={{fontWeight:'600',marginRight:'10px'}}>Email : </Typography>  <Link href={'mailto:'+props.singleQuote.quote.email}>{props.singleQuote.quote.email} </Link>
                            </div>
                            <div style={{display:'flex'}}>
                                <Typography variant="body1" style={{fontWeight:'600',marginRight:'10px'}}>Phone Number : </Typography>  <Link href={'tel:'+props.singleQuote.quote.phoneNumber}> {props.singleQuote.quote.phoneNumber} </Link>
                            </div>
                        </Paper>                
                        </Grid>                                                                   
                      </Grid>
                  </div>
                  <div className={classes.message}>
                  <Grid container>
                        <Grid xs={12}>
                        <Paper className={classes.mDetails}>
                            <div>
                                <Typography variant="body1" style={{fontWeight:'600'}}>Subject :  </Typography>
                            </div>
                            <div>
                                <Typography variant="body1">{props.singleQuote.quote.subject} </Typography>
                            </div>
                            <div>
                                <Typography variant="body1" style={{fontWeight:'600'}}>Message : </Typography>
                            </div>                            
                            <div>
                                <Typography variant="body1">{props.singleQuote.quote.message} </Typography>
                            </div>                            
                        </Paper>                
                        </Grid>                                                                   
                      </Grid>
                  </div>
              </div>) :  (
                  <div>Something went wrong</div>
              )}              
            </Container>
          </Grid>
        </Grid>            
    </>
  )
}

const mapStateToProps = (state) => ({      
  sidebar: state.sideBar.sidebar_status,      
  singleQuote_check : state.quoteSingleDirectory,
  singleQuote : state.quoteSingleDirectory.res_message,
});

export default connect(mapStateToProps)(withStyles(quotes_directory)(SingleQuotes))