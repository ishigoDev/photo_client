const gallery_style = (theme)=>({
    galleryfrontend:{
        background:'black',
        color:'white'
    },        
    photo_category:{
        margin:'0 0 90px 0',                
        display:'flex',
        justifyContent:'center',
        alignItems:'center',        
    },
    banner_section:{        
        width:"100%",
        height:'160px',
        padding:'10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gallery_img_container:{
        width:'90%',
        height:'600px',
        overflow:'hidden',        
        position:'relative',     
    },    
    loaderClass:{
        position:'relative',
        width:'100%',
    } ,
    pic_container:{
        width:'100%',
        padding:'20px',
        display:'flex',
        alignItems:"flex-start",
        justifyContent:'space-around',
        flexWrap:'wrap',
        minHeight:'600px !important',
        overflow:'hidden'
    },
    pic_contain:{
        width:'450px',    
        margin:'10px',
        transition: 'all 0.3s ease 0s',
    '&:hover':{
        transform: 'scale(1.10)',
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
        '&:hover':{
            transform: 'scale(1.0)',
        },
    },    
    },    
    spinnerImg:{
        width:'50px',
        height:'50px',
        position:'absolute',
        left:'50%',        
        transform:'translate(-50%,-50%)',           
        zIndex:'1000',        
        top:'180px'        
    }, 
    gallery_section:{
        minHeight:'800px',        
    }
});

export default gallery_style;