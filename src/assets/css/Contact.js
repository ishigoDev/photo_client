const contact_style = (theme)=>({
    contact:{
        background:'black',
        color:'white'
    },
    banner_section:{        
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
    bodyFamily:{
        fontFamily:"'Readex Pro', sans-serif;",
     },
    contact_section:{
        width:"100%",
        height:'400px',        
        display:'flex',
        justifyContent:'center',
        padding:'25px',
        alignItems:'center', 
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            flexDirection:"column",            
            justifyContent:'space-around',
            height:'766px',        
        }   ,
    },
    contact_image:{
        width:'100%',        
        height:'100%',
        display:'flex',
        justifyContent:'space-between',
        marginLeft:'45px',
        alignItems:'center',
        '& img':{
            width:'77%',
            height:'95%',
            boxShadow:'0px 0px 10px 2px #494949',
            [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
                width:'600px',
            }   ,
            [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
                width:'350px',
            }   ,
        },
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            marginLeft:'0',
            justifyContent:'center',
        }   ,
    },
    contact_information:{        
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        [theme.breakpoints.down(theme.breakpoints.values.sm)]:{
            flexDirection:'column'
        }
    },
    contact_main_section:{
        width:'50%',
        height:"100%",
        textAlign:'left',
        padding:'30px',
        display:'grid',
        [theme.breakpoints.down(theme.breakpoints.values.sm)]:{
         padding:'0',
         width:'100%',
        }
    },
    social_head:{
        fontWeight:'700',
        fontSize:'12px',
        color:'#7a7a7a'
    },
    social_link:{
        color:'white',
    },
    cont_detail:{
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]:{
            textAlign:'center'
        },        
    },
    cont_detail_res:{
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]:{
            textAlign:'center'
        },        
        [theme.breakpoints.down(theme.breakpoints.values.sm)]:{
            marginTop:'10px',
            textAlign:'center'
        },        
    }
});

export default contact_style;