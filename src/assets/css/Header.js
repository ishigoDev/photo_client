const header_style = (theme) => ({
    neutro_header: {
        background: '#000',
        color: 'white',
        height: '90px',
        '& .MuiToolbar-root': {
            marginTop: '9px',
            padding: '6px 30px',
            position: 'relative'
        },
        zIndex: '9999'

    },
    lgfnt: {
        fontFamily: 'Shalimar',
        fontSize: '55px',
        textDecoration: 'none',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            fontSize: '45px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '40px',
        },
    },
    header_menu: {
        '& .MuiSvgIcon-root': {
            fontSize: '35px'
        },
        [theme.breakpoints.up('md')]: {
            width: '52% !important'
        },
        [theme.breakpoints.between('xs', 'md')]: {
            width: '4%'
        },
    },
    navlink: {
        color: 'white',
        textDecoration: 'none',
    },
    menu_div: {
        display: 'flex',
        flexDirection: 'column',
        height: '32vH',
        justifyContent: 'space-around',
        marginTop: '20px'
    },
    header_mobile_menu: {
        position: 'absolute',
        background: 'black',
        width: '100vW',
        height: '88vH',
        left: '-16px',
        top: '106%',
        padding: '10px',
        [theme.breakpoints.down('xs')]: {
            left: '-16px !important',
        },
        [theme.breakpoints.down('sm')]: {
            left: '-24px',
            height: '40vH',
        },
    },
    header_mobile_menu_first: {
        opacity: '0',
    },
    header_mobile_menu_hide: {

        animation: `$growUp 300ms ease-in-out forwards`,
        transformOrigin: 'top center'
    },
    "@keyframes growUp": {
        "0%": {
            transform: "scaleY(1)",
        },
        "80%": {
            transform: "scaleY(0.4)"
        },
        "100%": {
            transform: "scaleY(0)",
        }
    },
    header_mobile_menu_show: {
        animation: `$growDown 300ms ease-in-out forwards`,
        transformOrigin: 'top center',
        opacity: '1',
    },
    "@keyframes growDown": {
        "0%": {
            transform: "scaleY(0)"
        },
        "80%": {
            transform: "scaleY(1.1)"
        },
        "100%": {
            transform: "scaleY(1)"

        }
    },
});

export default header_style;