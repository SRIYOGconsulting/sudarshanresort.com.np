
import {  Outlet } from 'react-router-dom'
import ScrollToTop from "./components/Scrolltop.jsx";
import NavBar from "./components/NavBar.jsx";
import RoadBlock from "./Components/RoadBlock";
import Footer from './components/Footer.jsx';

const App = () => {
  return (
  <div>
   <ScrollToTop />
   <NavBar />
   <Outlet />
   <Footer />
   <RoadBlock />
    </div>
  )
}

export default App
