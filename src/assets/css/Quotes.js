const quotes_style = (theme)=>({
    Quotes:{
        background:'black',
        color:'white'
    },    
    quotes_banner_section:{        
        width:"100%",
        height:'140px',
        padding:'10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',        
        '& h3':{
            letterSpacing:'6px',
            fontWeight:'600',
            color:'#BA3737',
            [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
                fontSize:'33px',
            }   ,
            [theme.breakpoints.between(theme.breakpoints.values.xs,theme.breakpoints.values.sm)]: {
                fontSize:'25px',
            }   ,
        }
    },   
    loaderClass:{
        position:'relative',
        width:'100%',
    } ,
    tableHead:{
        
    },
    spinnerImg:{
        width:'50px',
        height:'50px',
        position:'absolute',
        left:'51%',        
        transform:'translate(-50%,-50%)',           
        zIndex:'1000',        
        top:'-25px',
    },
    quotes_form_section:{
        color:'black',
        width:"90%",
        height:'600px',        
        display:'flex',
        justifyContent:'center',
        padding:'25px',
        background:'white',
        alignItems:'center', 
        margin:'auto',
        borderRadius:'2px',
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            flexDirection:"column",            
            justifyContent:'space-around',
            height:'880px',
            borderRadius:'5px',        
        },
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            flexDirection:"column",            
            justifyContent:'space-around',
            height:'100%',        
            padding:'15px',
            borderRadius:'10px',        
        },
    },
    quotes_form_section_1:{                     
        marginBottom:'80px',                  
        marginTop:'80px',                
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            marginBottom:'20px',                  
            marginTop:'20px', 
        },
    },
    contact_info_sec:{
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            display:'none',
        },
    },
    quotes_form_part3:{
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            // display:'none',
        },
    },
    quotes_form_part32:{
        [theme.breakpoints.up(theme.breakpoints.values.lg-140)]: {
            display:'none',
        },
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            display:'block',
            marginBottom:'20px',
            marginTop:'20px',
        },
    },
    break_line:{
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            display:'none',            
        },
    },
    quotes_form_part1:{
        padding:'35px',
        height:"100%",
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            padding:'9px'
        },
    },
    social_area:{        
        fontSize:'20px',
        marginTop:'20px',
        '& i:nth-child(2),i:nth-child(3)':{
            marginLeft:'20px'
        },
        '& i:hover':{
            cursor:'pointer',
            color:'#BA3737'
        },
    },
    quotes_form_part2:{
        padding:'20px',
        height:"100%",
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            padding:'2px'
        },
    },
    quote_information:{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',        
        '& p':{
            marginTop:'30px'
        } ,
        '& h5':{
            [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
                textAlign:'center',                
            },
            [theme.breakpoints.down(theme.breakpoints.values.md)]: {
                textAlign:'center',
                fontSize:'20px',
            },
        }              
    },    
    quote_information_1:{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',   
        textAlign:'center' ,    
        '& p':{
            marginTop:'30px'
        }               
    },    
    form_prt1:{
        display:'inline-block',
        width:'50%',
        padding:'10px',
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            width:'100%',
        },

    },
    form_prt2:{
        display:'inline-block',
        width:'100%',
        padding:'10px',        
    },
    input_cls:{
        marginTop:"10px",        
        width:'100%',
        '& .MuiInput-formControl':{
            border:'1px solid black',
        },
        '& .MuiInput-formControl.Mui-error':{
            border:'1px solid red !important',
        },
    },
    bodyFamily:{
        fontFamily:"'Readex Pro', sans-serif;",
     },
    input_cls2:{
        marginTop:"10px",
        border:'1px solid black',
        width:'100%',
        height:'90px',        
    },
    quotes_form:{
        padding:'10px',        
    },
    form_button:{
        width:'100%',
        padding:'10px',
        marginTop:'5px',    
        background:'black',
        color:'white',
        border:'none',
        border:'1px solid black',        
        transition:'font-size 0.5s',        
        '&:hover':{
            background:'white',
            color:'black',
        },
        "&:disabled":{
            backgroundColor:'black !important'
        }

    },
    contact_info_sec_1:{
        '& span':{
            padding:'1px 2px',
        }
    },
    quotes_form_notice_hide:{
        display:"none",
    },
    quotes_form_notice:{
        textAlign:'center',
        fontSize:'17px',                
    },
    quotes_form_notice_err:{
        textAlign:'center',
        fontSize:'17px',
        color:'red',

    }
});

export default quotes_style;