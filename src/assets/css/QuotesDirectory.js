const quotes_directory = (theme)=>({
    root: {
        "&$checked": {
          color: "rgba(0, 0, 0, 0.54)"
        }
      },
    quotes_directory_container:{
        padding:'25px !important',
        transition: 'all 0.96s',
        transitionTimingFunction: 'ease-out',
    }, 
    spinnerImg:{
        width:'70px',
        height:'70px',
        position:'absolute',
        left:'11%',                
        transform: 'translate(-50%,-50%)'       
    },
    error_notification:{
        width:'100%',
        height:'40px'    ,
        border:'1px solid red',
        borderRadius:'2px',
        display:'flex',
        alignItems:'center',
        padding:'0px 10px',
        color:'red'
    },
    quotes_bulk_actions:{            
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'center',
      width:'1200px',
      height:'60px',
    },
    pagination_icons:{
        fontSize:'25px'
    },
    row_count:{
        marginLeft:'690px'
    },
    apply_button:{
        marginLeft:'20px',
        background:'black',
        color:'white',
        '&:hover':{
            color:'black'
        }
    },
    check_box_row:{      
    },    
    select_bulk:{
        border:'1px solid black',
        borderRadius:'2px',
        padding:'3px 10px',
    },
    form_control_select:{
        minWidth:'140px',        
    },
    quotes_directory_heading:{
        marginBottom:'20px'
    },
    quotes_directory_tables:{
        width:'1200px',
    }    ,
    checkbox_cl:{
        width:'6%',
    },
    tableHead:{
        background:'#00000045',
        '& .MuiTableCell-head':{
            padding:'5px'
        }        
    },
    pagination_part:{
        display:'flex',
        justifyContent:'space-around',
        width:'200px',
        alignItems:'center'
    },
    pagination_input:{
        width:'40px',
        height:'32px',
        padding:'0px 3px',
        border :'1px solid black',        
    },
    quotes_detail:{

    },
    paper_udetails:{
        width:'100%',
        height:'200px',
        marginBottom:'20px',
        padding:'20px',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'space-around',
    },
    paper_ddetails:{
        width:'40%',
        height:'240px',
        marginBottom:'20px',
        padding:'20px',       
        background:'#000000c2',
    },
    mDetails:{
        width:'100%',
        height:'200px',
        marginBottom:'20px',
        padding:'20px',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'space-around',
    },
    loader_anayltics:{
        marginTop:'30px',
        marginLeft:'160px',
    },
    loader_anal_img:{
        width:'100px',
        height:'100px'
    },
    quoteAContainer:{
        width:'100%',
        height:'80%',
        padding:'10px 0px',
    }
});

export default quotes_directory;