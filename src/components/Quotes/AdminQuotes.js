import React,{useState,useEffect} from 'react'
import {Grid,Table,TextField,TableContainer,Paper,withStyles, Container,TableHead , TableRow, TableCell ,Checkbox , Typography , TableBody, Select, MenuItem , FormControl, Button }from "@material-ui/core";
import {useLocation,Link , useNavigate} from "react-router-dom";
import Sidebar from '../Dashboard/Sidebar';
import {useDispatch ,connect } from "react-redux";  
import {getToken} from '../../middleware/middleware';
import quotes_directory from '../../assets/css/QuotesDirectory.js';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {quote_form_action ,quote_bulk_action} from '../../actions/quote_directory';
import { red } from '@material-ui/core/colors';
import Loader from '../Loader/Loader.js';
import {IoIosArrowDroprightCircle , IoIosArrowDropright , IoIosArrowDropleft  , IoIosArrowDropleftCircle} from "react-icons/io";  

function AdminQuotes({classes,...props}) {  
  let navigate = useNavigate();
  const outerTheme = createTheme({
    palette: {
      secondary: {
        main: red[700],
      },
    },
  });
  const urlQuery = new URLSearchParams(useLocation().search);    
  let urlError = urlQuery.get('error');        
  if(urlError == 1 ){
    setTimeout(()=>{
      navigate('/quotes-directory/');
    },1000)
  }
  const dispatch = useDispatch();  
  const [selectBox , setSelectBox] = useState(false);
  const [selected , setSelectedCheck] = useState([]);
  const [pagination,setPagination] = useState({
    page : 0,
    per_page:0,
    totalPage:0,
    total:0,
  });
  let [currentPagination,setcurrentPagination] = useState(0);  
  useEffect(()=>{    
    dispatch(quote_form_action(getToken(),1));    
  },[]);    
  useEffect(()=>{   
    if(props.quotes.delete_success){
      dispatch(quote_form_action(getToken(),currentPagination));      
      setSelectBox(false);                
    }       
  },[props.quotes.delete_success]);        
  useEffect(()=>{       
    if(props.quotes.success){            
      var { page,
      per_page,
      totalPage,
      total} = props.quotes.res_message;      
      let current_page = parseInt(props.quotes.res_message.page) ;
      let d_total_page = props.quotes.res_message.totalPage ;
      setPagination({ page,
        per_page,
        totalPage,
        total});                       
      if(current_page > d_total_page)  {  
        dispatch(quote_form_action(getToken(),--current_page));              
        setcurrentPagination(--current_page);
      }else{        
        setcurrentPagination(props.quotes.res_message.page);
      }                  
    }       
  },[props.quotes.success]);    
const [bulk, setBulk] = React.useState('');
const location = useLocation();
let open_state;
if(location.state  == null){
  open_state = false;
}else{
  open_state = location.state.open
}
const onSelectAllClick = (e) =>{      
  if(e.target.checked){
    setSelectBox(true);
    const idSelected = props.quotes.res_message.quoteData.map(row=>row._id);    
    setSelectedCheck(idSelected);
  }else{
    setSelectBox(false);
    setSelectedCheck([]);    
  }
}
const bulkChange = (e) =>{
  setBulk(e.target.value);
}
const handleClickCheck = (e,row_id) =>{                      
  setSelectBox(false);
    var newSelected = [];    
    var index =  parseInt(selected.indexOf(row_id));    
      if(e.target.value){                               
        if(index < 0){
          newSelected = newSelected.concat(selected, row_id);          
        }else if(index == 0){            
            newSelected = newSelected.concat(selected.slice(1));
          }else if(index == selected.length-1){
            newSelected = newSelected.concat(selected.slice(0,-1));            
          }else if(index > 0){
            newSelected = newSelected.concat(
              selected.slice(0, index),
              selected.slice(index + 1),
            );
          }
      }              
        setSelectedCheck(newSelected);
}
const delete_bulk =() =>{    
    if(bulk == 'delete'){
      dispatch(quote_bulk_action(getToken(),selected));     
    }    
}
const pagination_action = (e)=>{  
  setcurrentPagination(e.target.value);       
  dispatch(quote_form_action(getToken(),e.target.value));
}
const prevPagination = () =>{  
  dispatch(quote_form_action(getToken(),--currentPagination));
  setcurrentPagination(currentPagination);
}
const nextPagination = () =>{  
  dispatch(quote_form_action(getToken(),++currentPagination));
  setcurrentPagination(currentPagination);
}
  return (
    <>
    <ThemeProvider theme={outerTheme}>
    <Grid container>
      <Grid item xs={0.5}>
          <Sidebar open_state={open_state}  />
      </Grid>
      <Grid item xs={11.5}>
        <Container className={classes.quotes_directory_container } style={props.sidebar ? {marginLeft:'0px'} : {marginLeft:'50px'} } maxWidth="lg"  >
          <div className={classes.quotes_directory_heading}>
              <Typography variant='h5'>Quotes Directory </Typography>
          </div>
          {
            urlError == 1 ? ( 
              <div className ={classes.error_notification}>
              <Typography variant="body1">No Such Quote Found ! </Typography>
            </div>          
            ) :''
          }
          
          <div className={classes.quotes_bulk_actions}>
              <FormControl className={classes.form_control_select}>                    
                <Select
                 value={bulk}
                 onChange = {bulkChange}
                   displayEmpty
                   className={classes.select_bulk}
                   >                                   
                    <MenuItem value=""><em>Bulk Action</em></MenuItem>
                    <MenuItem value="delete">Delete</MenuItem>
                  </Select>                
              </FormControl>                          
              <Button variant="contained" className={classes.apply_button} onClick={delete_bulk} >
                Apply
              </Button>
            <Typography className={classes.row_count}>{props.quotes.res_message.quoteData !== undefined ? ( props.quotes.res_message.quoteData.length >1 ? props.quotes.res_message.quoteData.length  +' Rows' : props.quotes.res_message.quoteData.length  +' Row' ) : '0 Row'}</Typography>
            <div className={classes.pagination_part}>              
            { currentPagination != 1  ? <IoIosArrowDropleftCircle className={classes.pagination_icons}  onClick ={prevPagination} /> : <IoIosArrowDropleft className={classes.pagination_icons} /> }
                  <div style={{display:'flex',alignItems:'center'}}>
                  <TextField type="number"  InputProps={{ inputProps: { max: pagination.totalPage, min: 1 } , disableUnderline: true  }} className={classes.pagination_input} value={currentPagination} onChange={(e)=>{pagination_action(e)}}/>
                  <Typography style={{marginLeft:'3px'}} variant="body1">of {pagination.totalPage} </Typography>
                  </div>
                  {  currentPagination < pagination.totalPage  ? <IoIosArrowDroprightCircle className={classes.pagination_icons} onClick ={nextPagination} /> : <IoIosArrowDropright className={classes.pagination_icons} /> }
            </div>           
          </div>          
          <div className={classes.quotes_directory_tables}>
          <Paper sx={{ width: '100%', mb: 2 }}>
              <TableContainer>
                <Table  sx={{ minWidth: 750 }}>                
                <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell className={classes.checkbox_cl}>
                    <Checkbox                            
                     className = {classes.check_box_row}
                     onChange = {onSelectAllClick}                                                                                                                                               
                     checked = {selectBox ? 'checked' : ''}
                  />               
                </TableCell>
                 <TableCell                 
                  > 
                     <Typography variant='h6'>Name</Typography>
                  </TableCell>
                  <TableCell                 
                  > 
                  <Typography variant='h6'>Email</Typography>
                  </TableCell>
                  <TableCell                 
                  > 
                  <Typography variant='h6'>Date</Typography>
                  </TableCell>                  
              </TableRow>
            </TableHead>
        <TableBody>                                                 
                    {props.quotes.loading !== true && props.quotes.res_message.quoteData !== undefined && props.quotes.res_message.quoteData.length !== 0  ? props.quotes.res_message.quoteData.map(row => (
                      <TableRow 
                      hover                      
                      role="checkbox"                      
                      tabIndex={-1}                                            
                       key={row._id}>
                         <TableCell padding="checkbox">
                        <Checkbox                                                                       
                        checked={selected.includes(row._id) ? 'checked' :"" }                        
                        value = {row._id}                                                
                        onChange  = {(e) => handleClickCheck(e,row._id)}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        <Link to={'/quote/'+row._id}>{row.full_name}</Link>                        
                      </TableCell>
                      <TableCell align="left" padding="none">{row.email}</TableCell>
                      <TableCell align="left" padding="none"  >{new Date(row.createdAt).toLocaleDateString("en-GB")}</TableCell>                      
                        </TableRow>
                      )):props.quotes.loading === true ? (<TableRow> <TableCell  component="th" scope="row" padding="none"></TableCell><TableCell  component="th" scope="row" padding="none"></TableCell><TableCell align="center"  component="th" scope="row" padding="50px" style={{padding:'38px', position:'relative'}}><Loader  display ={props.quotes.loading ? 'block':'none'} spinnerImg={classes.spinnerImg} /></TableCell><TableCell  component="th" scope="row" padding="none"></TableCell></TableRow>) :(<TableRow> <TableCell  component="th" scope="row" padding="none"></TableCell><TableCell  component="th" scope="row" padding="none"></TableCell><TableCell align="center"  component="th" scope="row" padding="50px"> <Typography variant='body1'> No Query Found </Typography> </TableCell><TableCell  component="th" scope="row" padding="none"></TableCell></TableRow>)  }
                    </TableBody>                    

            </Table>
              </TableContainer>
          </Paper>          
          </div>
          <div className={classes.quotes_bulk_actions}>
              <FormControl className={classes.form_control_select}>                    
                <Select
                 value={bulk}
                   displayEmpty
                   className={classes.select_bulk}
                   >                                   
                    <MenuItem value=""><em>Bulk Action</em></MenuItem>
                    <MenuItem value="delete">Delete</MenuItem>
                  </Select>                
              </FormControl>                          
              <Button variant="contained" className={classes.apply_button}>
                Apply
              </Button>
              <Typography className={classes.row_count}>{props.quotes.res_message.quoteData !== undefined ? ( props.quotes.res_message.quoteData.length >1 ? props.quotes.res_message.quoteData.length  +' Rows' : props.quotes.res_message.quoteData.length  +' Row' ) : '0 Row'}</Typography>
              <div className={classes.pagination_part}>              
            { currentPagination != 1  ? <IoIosArrowDropleftCircle className={classes.pagination_icons}  onClick ={prevPagination} /> : <IoIosArrowDropleft className={classes.pagination_icons} /> }
                  <div style={{display:'flex',alignItems:'center'}}>
                  <TextField type="number"  InputProps={{ inputProps: { max: pagination.totalPage, min: 1 } , disableUnderline: true  }} className={classes.pagination_input} value={currentPagination} onChange={(e)=>{pagination_action(e)}}/>
                  <Typography style={{marginLeft:'3px'}} variant="body1">of {pagination.totalPage} </Typography>
                  </div>
                  {  currentPagination < pagination.totalPage  ? <IoIosArrowDroprightCircle className={classes.pagination_icons} onClick ={nextPagination} /> : <IoIosArrowDropright className={classes.pagination_icons} /> }
            </div>     
          </div>          
        </Container>        
      </Grid>
    </Grid>
    </ThemeProvider>
    </>
  )
}
const mapStateToProps = (state) => ({    
  sidebar: state.sideBar.sidebar_status,    
  quotes:state.quoteDirectory
});

export default connect(mapStateToProps)(withStyles(quotes_directory)(AdminQuotes))