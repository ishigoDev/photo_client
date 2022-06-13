const admin_Style = (theme)=>({
    admin_access:{
        background:'black',
        color:'white'
    },
    banner_section:{
        width:"100%",
        height:'160px',
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
        },
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
          height:'200px',
        },   
    },
    error_section_1:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'20px',
        marginTop:'-10px',
        color:'red'

    },
    loaderClass:{
        position:'relative',
        width:'100%',

    } ,
    spinnerImg:{
        width:'50px',
        height:'50px',
        position:'absolute',
        left:'51%',        
        transform:'translate(-50%,-50%)',           
        zIndex:'1000',        
        top:'-25px',
    },
    login_section:{
        width:'100%',
        height:'407px',
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            height:'850px'
        },
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            height:'650px',
        },        
        [theme.breakpoints.down(theme.breakpoints.values.md-200)]: {
            height:'515px'
        },        
    },        
    login_box:{
        color:'black',
        borderRadius:'3px',
        margin:'auto',
        width:'30%' ,
        background:'white',
        height:'85%',
        padding:'20px',        
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            width:'50%',
            height:'45%',
            padding:'25px',
        },        
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            width:'50%',
            height:'56%',
            padding:'25px',
        },        
        [theme.breakpoints.down(theme.breakpoints.values.md-200)]: {
            width:'50%',
            height:'70%',
            padding:'25px',
        },
        [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
            width:'90%',
            height:'70%',
            padding:'25px',
        },
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
    form_button:{
        width:'100%',
        padding:'10px',
        marginTop:'5px',    
    },
    form_prt1:{
        display:'inline-block',
        width:'100%',
        textAlign:'center',
        '& i':{
            fontSize:'40px',
            marginBottom:'10px'
        },
        marginBottom:'15px'

    },     
    form_button:{
        width:'100%',
        padding:'10px',
        marginTop:'10px',    
        background:'black',        
        color:'white',
        border:'none',
        border:'1px solid black',        
        '&:hover':{
            background:'white',
            color:'black',
        }
    },
    form_prt2:{
        display:'inline-block',
        width:'100%',
        marginBottom:'10px',
    }
});

export default admin_Style;