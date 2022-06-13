const home_style = (theme)=>({
    
    home_section:{        
        height:'80vH',         
        background:'black',
        [theme.breakpoints.down('lg')]: {
            height:'86vH',
        }        
    },
    banner_area:{
        backgroundImage: 'url(https://images.pexels.com/photos/687501/pexels-photo-687501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
        backgroundRepeat: 'no-repeat',                    
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    site_intro:{
        width:'90%',
        height:'75%',
        background:'white',
        position:'absolute',
        top:'14%',
        left:'-14%',
        textAlign:'center',
        padding:'30px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',        
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            top:'11%',
            left:'11%',
            width:'78%',            
        },
        [theme.breakpoints.down('md')]: {
            padding:'5px 30px',
        },
        [theme.breakpoints.down('xs')]: {
            padding:'5px 30px',
            width:'85%',         
            left:'8%',
            top:'9%',
            height:'79%'
        }
    },
    site_area:{
        position:'relative',        
    },
    banner_logo:{
        fontFamily:'Shalimar',
        fontSize:'45px',     
        [theme.breakpoints.down('lg')]: {
            fontSize:'50px',     
        }   ,
        [theme.breakpoints.down('md')]: {
            fontSize:'45px',     
        },   
        [theme.breakpoints.down('xs')]: {
            fontSize:'40px',     
        },   
    },
    customheadthree:{
        letterSpacing:'5px',
        [theme.breakpoints.down('xs')]: {
            fontSize:'25px',     
            letterSpacing:'4px',
        }   
    },
    Quotelink:{
        fontSize:'20px',
        color:'black',
        textDecoration:'underline',
        '&:hover':{
            textDecoration:'none',
        },
        [theme.breakpoints.down('lg')]: {
            fontSize:'25px',     
        }   ,
        [theme.breakpoints.down('md')]: {
            fontSize:'22px',     
        }   ,
        [theme.breakpoints.down('xs')]: {
            fontSize:'16px'  
        }   
    }
}); 

export default home_style;