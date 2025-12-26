
import {  Outlet } from 'react-router-dom'
import ScrollToTop from "./components/Scrolltop.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from './components/Footer.jsx';

const App = () => {
  return (
  <div>
   <ScrollToTop />
   <NavBar />
   <Outlet />
   <Footer />
    </div>
  )
}

export default App
