import React, { useEffect, useState} from 'react';
import {withStyles,Grid,Typography} from "@material-ui/core";
import gallery_style from '../../assets/css/Gallery.js';
import { useParams} from "react-router-dom";
import { gallery_action, gallery_intial } from '../../actions/gallery.js';
import Loader from '../Loader/Loader';
import { useDispatch, connect } from "react-redux";


function Gallery({ classes, ...props }) {
  const Page = 1;
  const totalPageNo = 1;
  const [page, setPage] = useState(Page);
  const [totalPage, setTotalPage] = useState(totalPageNo);
  const [gallery, setGallery] = useState([]);
  const dispatch = useDispatch();  
  const category = useParams().category;  
  useEffect(() => {
    dispatch(gallery_action(category, page));
  }, [page]);
  useEffect(() => {
    if (props.gallery_success === true) {
      setTotalPage(props.gallery.totalPage);
      const images_src = props.gallery.pic.map(src=>src.imgDirectory);
      setGallery([...gallery, ...images_src]);
      dispatch(gallery_intial());
    }
  }, [props.gallery_success]);
  const bottomCall = () => {
    if (page <= totalPage)
      setPage(page + 1);    
  };

  window.onscroll = function () {
    console.log(window.innerHeight + document.documentElement.scrollTop);
    console.log(document.documentElement.offsetHeight);
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight-1) {
      bottomCall();
    }
  }
  return (
    <>
      <Grid container component="main" className={classes.galleryfrontend}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.banner_section} >
          <Typography variant="h3" style={{letterSpacing:'6px',fontWeight:'600',color:'#BA3737'}}>GALLERY</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gallery_section}>
          {props.gallery_loading == true && props.gallery_success == false ? (<Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.photo_category}>
            <div className={classes.gallery_img_container}>
              <Loader loaderClass={classes.loaderClass} display={props.gallery_loading === true ? 'block' : 'none'} spinnerImg={classes.spinnerImg} />
            </div>
          </Grid>) : (
            <div className={classes.pic_container}>
              {gallery.length !== 0 ? (
                gallery.map((pic,index) => (<img src={pic} className={classes.pic_contain} key={index} />))
              ) : (<Typography >Not Found</Typography>)}
                {props.gallery_loading == true && props.gallery_success == false ? (<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className={classes.gallery_img_container_1}>
                    <Loader loaderClass={classes.loaderClass} display={props.gallery_loading === true ? 'block' : 'none'} spinnerImg={classes.spinnerImg} />
                  </div>
                </Grid>) : (<></>)}
            </div>
          )}
        </Grid>
        
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => ({  
  gallery_success: state.gallery_reduce.success,
  gallery: state.gallery_reduce.res_message,
  gallery_loading: state.gallery_reduce.loading,
  totalPage: state.gallery_reduce.res_message.totalPage
});


export default connect(mapStateToProps)(withStyles(gallery_style)(Gallery))