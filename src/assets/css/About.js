const about_style = (theme)=>({
    about:{
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
    },
    notfound_section:{        
        width:"100%",
        height:'25.5rem',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            height:'42.2rem',
            alignItems:'center'            
        },   
        [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
            height:'17.2rem',
            alignItems:'flex-start'
        }   
    },
    not_found:{
        fontSize:'230px',
        color:'rgb(186, 55, 55)',
        textShadow:'rgb(186 55 55 / 30%) 9px 9px',
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            marginBottom:'120px'      
        },
        [theme.breakpoints.down(theme.breakpoints.values.md)]: {
            fontSize:'160px',    
        },
        [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
            marginBottom:'0px'      
        },  
    },
    about_section:{
        padding:'25px',
        marginBottom:'35px',
    },
    site_owner:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',   
    },
     bodyFamily:{
        fontFamily:"'Readex Pro', sans-serif;",
     },
    site_owner_container:{
        width: '100%',        
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',    
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            flexDirection:"column",
            marginBottom:"20px",
        }   ,
        [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
            flexDirection:"column",
            marginBottom:"0px",
        }   
    },
    site_ownerpic:{
        height:'350px',
        width:'450px',
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            width:"90%",
            marginBottom:"10px",
            height:'400px'
        }   ,
        [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
            width:"100%",
            marginBottom:"10px",
            height:'400px'
        }   
    },
    site_ownerpic_2:{
        height:'350px',
        width:'450px',
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            width:"80%",
            marginBottom:"10px",
            height:'400px'
        }  ,
        [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
            width:"90%",
            marginBottom:"15px",
            height:'400px'
        }   
    },
    about_matter:{
        padding: '20px',
        margin: 'auto auto',
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            margin:'0',
        },
        [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
            padding:'10px 0px',
        }
    },
    about_section_extend:{
        padding:'25px 30px',        
        [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
            padding:'25px',
        },
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            padding:'25px 22px',
        }
    },
    about_section_spacing:{
        height:'45px',        
    },
    about_section_2:{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:'30px',
        [theme.breakpoints.down(theme.breakpoints.values.lg-150)]: {
            flexDirection:"column"
        }   
    }
});

export default about_style;