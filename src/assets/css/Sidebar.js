const sidebar_style = (theme)=>({
    sidebar:{
        background:'Black',        
        color:'white',
        top:"12% !important",
        transition: 'width 0.96s',
        transitionTimingFunction: 'ease-out',
        height:'700px',
        padding:'20px 15px',        
        '& .MuiDrawer-paper':{
            position:'relative',
            background:'black',
            overflow:'hidden',
        }
    },
    menuListing:{
        
    },
    submenuListing:{
        display:'flex',
        flexDirection:'column',    
                        
    },
    active:{
            color:'#BA3737 !important',
            textDecoration:'none',    
    },
    adminMenu:{
        textDecoration:'none',
        color:'white',
        marginTop:'10px',
        marginLeft:'10px',
        display:'flex',
        alignItem:'center',
        padding:'10px',
        '&:hover':{            
            color:'rgb(186, 55, 55) !important',            
        } ,        
    },

    collapseDiv:{
        fontSize:'30px',
        marginRight:'10px'
    },
    menuIcon:{
        fontSize:'30px',
        marginRight:'12px'
    },
    menuText:{
        marginBottom:'10px',
    },
    user_area_sidebar:{
        height:'100px',
        marginBottom:'20px'
    },
    user_box_sidebar:{
        textAlign:'center',        
    },
    Arrowcls:{
        textAlign:'right',
        color:'white',
    },

});

export default sidebar_style;