import React from 'react'
import {         
    withStyles,      
}from "@material-ui/core";
import menu_style from '../../assets/css/MenuSymbol.js';

function MenuSymbol({classes,...props}) {    
    return (      
        <div className={!props.close ? `${classes.menuBtn}` : `${classes.menuBtn} ${classes.close}`} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default withStyles(menu_style)(MenuSymbol);
