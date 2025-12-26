import { Link } from "react-router-dom";
import menu from "/images/menu/bookinglogo.png"
const Menu = () => {
  return (
    <div>
      <Link to="https://d.sriyog.com/sudarshanresort" target="_blank">
        <img
          src={menu}
          alt="booking logo"
          aria-label="whatsapp"
          className="
            fixed
            bottom-[180px]
            right-[20px]
            w-[75px]
            h-[75px]
            z-[100]
          "
        />
      </Link>
    </div>
  );
};

export default Menu;
