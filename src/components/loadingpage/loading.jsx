import React, { useEffect } from 'react'
import style from './loading.module.css'
import { useNavigate } from 'react-router-dom';
const Loading = () => {
  const navigate = useNavigate();
   useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/home");  
      }, 3000);
  
      return () => clearTimeout(timer); // cleanup
    }, [navigate]);
    
  return (
    <div className={style.containerloading}>
      <div className={style.loadingPopUp}>
      </div>
    </div>
  )
}

export default Loading
