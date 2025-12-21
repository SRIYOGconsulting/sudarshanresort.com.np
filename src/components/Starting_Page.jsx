import { useEffect } from 'react'
import style from './Starting_Page.module.css'
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
      <div className={style.image_wrapper}>
       <button  className={style.X} onClick={handleClose}>X</button>
      <img className={style.starting_img} src="favicon/loadingicon.jpg" alt="loading" />
   </div>
    </div>
  )
}

export default Starting_Page
