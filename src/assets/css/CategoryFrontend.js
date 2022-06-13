const categoryFrontend_style = (theme)=>({
    categoryfrontend:{
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
    categories_sections:{
        
    },
    photo_category:{
        margin:'0 0 50px 0',                
        display:'flex',
        justifyContent:'center',
        alignItems:'center', 
        [theme.breakpoints.down('xs')]: {
            margin: '0 0 20px 0'
        },             
        [theme.breakpoints.between('xs','sm')]: {
            margin: '0 0 25px 0'
        },             
    },
    category_img_container:{
        width:'90%',
        height:'600px',
        overflow:'hidden',        
        position:'relative',
        '&:hover img':{
            transform:'scale(1.2)'
        }  ,              
        [theme.breakpoints.down('xs')]: {
            height: '500px',
            width:'93%',
        }, 
        [theme.breakpoints.down('md')]: {
            '&:hover img':{
                transform:'scale(1.0)'
            }  ,       
        }, 
    },
    category_img:{
        width:'100%',
        height:'100%',
        transition: '0.5s all ease-in-out',
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover'
        },        
    },
    overlay:{    
        opacity:'0',
        position:'absolute',
        top:'0',
        left:'0',        
        background:'#00000070',        
        height:'100%',
        width:'100%',
        transition:'opacity 0.25s',        
        '&:hover':{
            opacity:'1',
        } ,              
        [theme.breakpoints.down('md')]: {
            opacity: '1'
        },
    },
    img_text:{        
        position:'absolute',
        top:'50%',
        left:'50%',        
        transform : 'translate(-50%,-50%)',                   
    },
    category_link:{
        color:'white',
        fontSize:'40px',
        textDecoration:'none'
    },
    loaderClass:{
        position:'relative',
        width:'100%',
    } ,
    spinnerImg:{
        width:'50px',
        height:'50px',
        position:'absolute',
        left:'50%',        
        transform:'translate(-50%,-50%)',           
        zIndex:'1000',        
        top:'180px'        
    },  
});

export default categoryFrontend_style;