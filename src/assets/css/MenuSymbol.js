const menu_style = (theme)=>({
        menuBtn:{
            width:'35px',
            height:'25px',            
            position:'relative',
            display:'flex',
            justifyContent:'center',
            alignItem:'center',                    
            [theme.breakpoints.down('xs')]: {
                width:'30px', 
                height:'23px',
            },
            [theme.breakpoints.between('xs','sm')]: {
                width:'30px',                 
            },
            '& span':{
                position: 'absolute',
                background: 'white',
                width: '100%',
                height: '16%',
                transition: '.3s .3s top, .3s .3s bottom, .2s transform',
                borderRadius: "100px"
            },
            '& span:nth-of-type(1)':{
                top:0,
            },
            '& span:nth-of-type(2)':{
                	top: '40%',
                	opacity: '1',
                	transition: 'opacity .1s .3s',
            },
            '& span:nth-of-type(3)':{
                bottom:0,
            },
        },
        close:{
            '& span':{
                transition:".3s top, .3s bottom, .3s .3s transform"
            },
            '& span:nth-of-type(1)':{
                top: '40%',
                transform: 'rotate(45deg)',
            },
            '& span:nth-of-type(2)':{
                opacity: '0',
                transition: 'opacity .1s .3s'
            },
            '& span:nth-of-type(3)':{
                bottom: '40%',
                transform: 'rotate(-45deg)'
            }
        }            
});
export default menu_style;