import React, {useState} from 'react';
import {     
    withStyles,  
    Typography ,    
    Box,    
    Grid  ,
    Link    ,
    Button,    
    TextareaAutosize,
    TextField,    
}from "@material-ui/core";
import { useDispatch, connect } from "react-redux";
import quotes_style from '../../assets/css/Quotes';
import {quote_form_action} from '../../actions/quote_form';
import Loader from '../Loader/Loader';
function Quotes({classes,...props}) {
  const dispatch = useDispatch();
    const initailState ={
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        subject:'',
        message:''
      }
    let [quoteData,setQuoteData] = useState(initailState);
    const [error, setError] = useState(initailState);  
    const formValid = (userdata) =>{        
        let error_callback = false;
          let errors ={};        
          if(!userdata.firstName.trim()){
            error_callback=true;
            errors.firstName ="First Name Required *";          
          }
          if(!userdata.lastName.trim()){
            error_callback=true;
            errors.lastName ="Last Name Required *";          
          }
          if(!userdata.email.trim()){
            error_callback=true;
            errors.email ="Email Required *";          
          }else if(userdata.email){
            if (/\S+@\S+\.\S+/.test(userdata.email))
              {
                error_callback=false;                
              }else{
                error_callback = true;
                errors.email ="Email is invalid *";          
  
              }
          }          
          if(!userdata.phoneNumber.trim()){
            error_callback=true;
            errors.phoneNumber ="Mobile No Required *";          
          }else if(userdata.phoneNumber){
            if(userdata.phoneNumber.length < 10 || userdata.phoneNumber.length > 10){
              let mob = /^[1-9]{1}[0-9]{9}$/;
              if(userdata.phoneNumber.length < 10 || userdata.phoneNumber.length > 10){
                if (mob.test(userdata.phoneNumber) === false) {            
                  error_callback=true;
                  errors.phoneNumber ="Please enter valid mobile number and must be 10 digits *";          
                }
              }else{
                if (mob.test(userdata.phoneNumber) === false) {            
                  error_callback=true;
                  errors.phoneNumber ="Please enter valid mobile number *";          
                }
              }
              
            }
            
          }else if(userdata.phoneNumber.length < 10 || userdata.phoneNumber.length > 10){
            error_callback=true;
            errors.phoneNumber ="Mobile No must have 10 digits *";          
          }
          if(!userdata.message.trim()){
            error_callback=true;
            errors.message ="Message Required *";          
          }
          setError({...errors});        
          return error_callback;
    }
    const resetForm = () =>{            
      setQuoteData(initailState );      
        window.scrollTo({top: 0, behavior: 'smooth'});    
    }
    const quoteFormSubmit = ( ) =>{        
      const onResponse = (status,response) => {        
        if(status === 'success'){          
          resetForm();
        }
      };  
        if(!formValid(quoteData)){
          setError(initailState);
          const quote_array = {};
          Object.entries(quoteData).map(obj => {            
            quote_array[obj[0]] = obj[1].trim();              
        });                           
          dispatch(quote_form_action(quote_array,onResponse));    
        }
    }        
    return (
      <>  
        <Grid container component="main" className={classes.Quotes}>
            
            <Grid item xs={12}  sm={12} md={12}  lg={12} xl={12} className={classes.quotes_banner_section} >   
                <Typography variant="h3">GIVE US A CHANCE</Typography>                
            </Grid>            
            <Grid item xs={12}  sm={12} md={12}  lg={12} xl={12} className={(props.responseQuote.success == true) ? classes.quotes_form_notice : classes.quotes_form_notice_hide } >   
                <Typography variant="p">{props.responseQuote.res_message.status ==1 ? 'Received your Quotes . We will contact as soon as Soon. Thank You!' :''}</Typography>                
            </Grid>
            <Grid item xs={12}  sm={12} md={12}  lg={12} xl={12} className={(props.responseQuote.error == true) ? classes.quotes_form_notice_err : classes.quotes_form_notice_hide } >   
                <Typography variant="p">{props.responseQuote.res_message.status == 0  ? 'Some Error Occured . Please try again Later' :''}</Typography>                
            </Grid>
            <Grid item xs={12}  sm={12} md={12}  lg={12} xl={12} className={classes.quotes_form_section_1} >   
                <Grid item xs={12}  sm={12} md={12}  lg={12} xl={12} className={classes.quotes_form_section} >   
                <Grid item xs={12}  sm={12} md={12}  lg={5} xl={5} className={classes.quotes_form_part1} >                  
                    <Box className={classes.quote_information}>
                        <Typography variant="h5">For inquiries about sessions and <br className={classes.break_line} /> pricing fill out the form and someone <br className={classes.break_line} /> will get back to you.</Typography>
                        <div className={classes.contact_info_sec}>                            
                        <Typography variant="body1  " className={classes.address_text}>500 Terry Francois Street <br/> San Francisco, CA 94158</Typography>
                        <p><Link to="#" >admin@gmail.com</Link> </p>
                        <div className={classes.social_area}>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                        </div>
                    </Box>                        
                </Grid>
                <Grid item xs={12}  sm={12} md={12}  lg={7} xl={7} className={classes.quotes_form_part2} >
                    <form className={classes.quotes_form} noValidate autoComplete="off">                                                                   
                        <div className={classes.form_prt1}>
                            <p>First Name </p>
                            <TextField className={classes.input_cls}     
                            {...(error.firstName !=='' && error.firstName !== undefined?({error:true}):(''))}                  
                            onChange={(e)=>{
                                                setQuoteData({
                                                    ...quoteData,
                                                    firstName:e.target.value
                                                })            
                                                setError({...error,firstName:''})                                    
                                            }} 
                                            value={quoteData.firstName} 
                                            helperText={error.firstName}                                            
                                            />                  
                        </div>
                        <div className={classes.form_prt1}>
                            <p>Last Name </p>
                            <TextField className={classes.input_cls} 
                            {...(error.lastName !=='' && error.lastName !== undefined?({error:true}):(''))}    
                            onChange={(e)=>{
                                                setQuoteData({
                                                    ...quoteData,
                                                    lastName:e.target.value
                                                })           
                                                setError({...error,lastName:''})                                     
                                            }}
                                            value={quoteData.lastName} 
                                            helperText={error.lastName}
                                             />                  
                        </div>
                        <div className={classes.form_prt1}>
                            <p>Email </p>
                            <TextField className={classes.input_cls}
                            {...(error.email !=='' && error.email !== undefined?({error:true}):(''))}    
                             onChange={(e)=>{
                                                setQuoteData({
                                                    ...quoteData,
                                                    email:e.target.value
                                                })               
                                                setError({...error,email:''})                                 
                                            }}
                                            value={quoteData.email} 
                                            helperText={error.email}
                                             />                  
                        </div>
                        <div className={classes.form_prt1}>
                            <p>Phone Number </p>
                            <TextField className={classes.input_cls}
                            {...(error.phoneNumber !=='' && error.phoneNumber !== undefined?({error:true}):(''))}    
                            onChange={(e)=>{
                                                setQuoteData({
                                                    ...quoteData,
                                                    phoneNumber:e.target.value
                                                })    
                                                setError({...error,phoneNumber:''})                                            
                                            }} 
                                            value={quoteData.phoneNumber} 
                                            helperText={error.phoneNumber}
                                            />                  
                        </div>
                        <div className={classes.form_prt2}>
                            <p>Subject </p>
                            <TextField className={classes.input_cls}  onChange={(e)=>{
                                                setQuoteData({
                                                    ...quoteData,
                                                    subject:e.target.value
                                                })                                                
                                            }} 
                                            value={quoteData.subject} 
                                            />                  
                        </div>
                        <div className={classes.form_prt2}>
                            <p>Message </p>
                            <TextareaAutosize    
                                style={{ width: '100%',height:'100px',marginTop:'10px' }}
                                {...(error.message !=='' && error.message !== undefined?({style:{width: '100%',height:'100px',marginTop:'10px',borderColor:'red'}}):(''))}                                
                                onChange={(e)=>{
                                    setQuoteData({
                                        ...quoteData,
                                        message:e.target.value
                                    })     
                                    setError({...error,message:''})                                            
                                }}                                
                                value={quoteData.message} 
                                /> 

                                {<span style={{fontSize:'13px',fontWeight:'300',color:'red'}}>

                                    {error.message !=='' && error.message !== undefined ? error.message:''}
                                </span>
                                }                   
                        </div>
                        <div className={classes.form_prt2}>                            
                            <Button variant="contained" className={classes.form_button} onClick={quoteFormSubmit} style ={ props.responseQuote.loading ? {fontSize:'0px',height:'50px'} :{fontSize:'inherit'} } disabled={props.responseQuote.loading}>Submit</Button>
                            <Loader loaderClass={classes.loaderClass} display ={props.responseQuote.loading ? 'block':'none'} spinnerImg={classes.spinnerImg} />
                        </div>                        
                    </form>
                </Grid>
                <Grid item xs={12}  sm={12} md={12}  lg={0} xl={0} className={classes.quotes_form_part32} >
                    <Box className={classes.quote_information_1}>                       
                        <div className={classes.contact_info_sec_1}>                            
                        <Typography variant="body1" className={classes.address_text , classes.bodyFamily}>500 Terry Francois Street San Francisco, CA 94158</Typography>
                        <p><Link to="#" >admin@gmail.com</Link> </p>
                        <div className={classes.social_area}>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                        </div>
                    </Box>                        
                </Grid>
                </Grid>            
            </Grid>            
        </Grid>
        </>
    )
}

const mapStateToProps = (state) => ({
  responseQuote: state.quoteForm
});
export default connect(mapStateToProps)(withStyles(quotes_style)(Quotes))
