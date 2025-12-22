  import { useState, useEffect } from 'react'
  import { Link,useNavigate  } from 'react-router-dom'
  import style from '../styles/navBar.module.css'
  import { Menu } from 'lucide-react'
 
  const Nav_Bar = () => {
      const navigate = useNavigate();
    const [scroll, setScroll] = useState(false);
    const [menu, setMenu]=useState(false)
    
    const handleNavigation = (path) => {
    navigate(path);
 
  };

    useEffect(() => {
      const onScroll = () => {
        setScroll(window.scrollY > 50);
      };
    

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    
    const menuhandler=()=>{
       setMenu(prev => !prev);
    }
    
    return (<>
      <nav className={`${style.nav_container} ${scroll ? style.nav_scroll : ""}`}>
      <div className={style.nav_logo}>
          <img src="favicon/logo.png" alt="logo" />
      </div>
      <div className={style.nav_button_both_container}>
        <ul className={style.nav_menu}>
          <Link  to={'/'}  className={style.li}>Home</Link>
          <li className={style.li} onClick={() => handleNavigation("/about")}>About</li>
          <li className={style.li} onClick={() => handleNavigation("/rooms")}>Rooms</li>
          <li className={style.li} onClick={() => handleNavigation("/services")}>Services</li>
          <li className={style.li} onClick={() => handleNavigation("/gallery")}>Gallery</li>
          <li className={style.li} onClick={() => handleNavigation("/contact")}>Contact</li>
        </ul>
        <Menu className={style.menu} onClick={menuhandler} size={35} color='white'/>
          <Link to="https://d.sriyog.com/sudarshanresort" target="_blank" className={style.linkbook}><img src="/icons/booking.svg" alt="" /></Link>
         
        </div>

      </nav>
      
   
        
     <div className={`${style.mobile_menu} ${scroll ? style.mobile_scroll : ""} ${menu ? style.active : ""}`}>
      <ul className={style.nav_mobile}>
        <Link to="/" onClick={() => setMenu(false)}>Home</Link>
        <li onClick={() =>  handleNavigation("/about")}>About</li>
        <li onClick={() => handleNavigation("/rooms")}>Rooms</li>
        <li onClick={() => handleNavigation("/services")}>Services</li>
        <li onClick={() => handleNavigation("/gallery")}>Gallery</li>
        <li onClick={() => handleNavigation("/contact")}>Contact</li>
      </ul>
      </div>
      
      </>
    )
  }

  export default Nav_Bar
