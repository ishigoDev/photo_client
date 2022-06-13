const admin_header_Style = (theme)=>({
    neutro_header:{
        background:'#000',                
        color:'white',
        height:'90px',
        '& .MuiToolbar-root':{
            marginTop:'9px',
            padding:'6px 30px',
            position:'relative'
        },
        zIndex:'9999'      
    },
    header_menu:{
        '& .MuiSvgIcon-root':{
            fontSize:'35px'
        },        
        [theme.breakpoints.up('md')]: {
              width:'15% !important' 
        },       
        [theme.breakpoints.between('xs','md')]: {
              width:'4%' 
        },       
    },
    lgfnt:{
        fontFamily:'Shalimar', 
        fontSize:'55px' ,   
        textDecoration:'none',
        color:'white',
        [theme.breakpoints.down('sm')]: {            
            fontSize:'45px' ,           
        },        
        [theme.breakpoints.down('xs')]: {            
            fontSize:'40px' ,           
        },        
    },  
    loginIcon:{
        fontSize:'30px',
        marginLeft:'10px'
    },
    profileModal:{
        position:'absolute',
        width:'225px',
        height:'130px',
        top:'90%',
        left:'83.5%',
        background:'black',
        padding:'12px',
        textAlign:"left",        
    },
    profileText:{
        textAlign:'center',
        display:'inline-block',
        width:'100%',
        marginTop:'13px',
        '& a':{
            textDecoration:'none',
            color:'white',
        },   
        '& a:hover':{
            color:'rgb(186, 55, 55)',
        }
    }
});

export default admin_header_Style;