const footer_style = (theme)=>({
    footer:{
        background:'black',
        color:'white',
        height:'7.8vH',
        width:'100%',
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]:{
            height:'18vH !important',
        },
        [theme.breakpoints.between(theme.breakpoints.values.lg-150,theme.breakpoints.values.lg)]: {
            height:'18vH !important',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },
        [theme.breakpoints.between(theme.breakpoints.values.md-200,theme.breakpoints.values.md)]: {
            height:'21.5vH !important',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },
        [theme.breakpoints.down('sm')]: {
            height:'33vH',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },
        [theme.breakpoints.down('xs')]: {
            height:'38vH !important',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }
    },
    social_area:{
        display:'flex', 
        width:'600px',  
        height:'100%'      ,
        justifyContent:'space-around',                
        [theme.breakpoints.down('md')]: {
            flexDirection:'column',
            justifyContent:'space-around',
            alignItems:'center',            
            height:'120px',
            width:'100%',            
            marginTop:'15px',
        }
    },
    copyright_area:{        
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            marginTop:'25px',
            marginBottom:'25px',
            fontSize:'25px',
        },
        [theme.breakpoints.down('md')]: {            
            marginBottom:'25px',
            fontSize:'25px',
            marginTop:'-11px'
        },
        [theme.breakpoints.down('sm')]: {            
            marginBottom:'15px',
            fontSize:'20px !important',
        }
    },
    bodyFamily:{
        fontFamily:"'Readex Pro', sans-serif;",
    },
    footerContainer:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'12px 28px',        
        [theme.breakpoints.down('md')]: {
            flexDirection:'column',            
            padding:'5px 28px',
        }
    },
    social_link:{
        fontFamily:"'Readex Pro', sans-serif;",
        color:'white',
        '&:hover':{
            textDecoration:'none !important'
        }
    }
}); 

export default footer_style;