import React, { useEffect} from 'react';
import { useParams , useLocation } from "react-router-dom";

function ScrolltoTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
  return (
    <div></div>
  )
}

export default ScrolltoTop