import React, { useEffect } from 'react'
import startingimg from '../../assets/starting_page_img.jpg'
import style from '../../styles/Starting_Page.module.css'
import { useNavigate } from 'react-router-dom';
const Starting_Page = () => {
   const navigate = useNavigate();

  // Auto redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");  
    }, 3000);

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  // X button click redirect
  const handleClose = () => {
    navigate("/home");
  };
  return (
    <div className={style.starting_container}>
       <button  className={style.X} onClick={handleClose}>X</button>
      <img className={style.starting_img} src={startingimg} alt="" />
    </div>
  )
}

export default Starting_Page
