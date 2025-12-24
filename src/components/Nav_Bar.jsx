import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Mail, PhoneCall, Facebook, Instagram, Linkedin } from "lucide-react";

const Nav_Bar = () => {
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/*  TOP GREEN BAR  */}
      <div className="flex justify-around items-center bg-[#3d7703] gap-[250px] h-[40px]
        max-[480px]:flex-col max-[480px]:gap-0 max-[480px]:py-[10px] text-center">

        <div className="flex justify-center items-center gap-[20px]
          max-[480px]:flex-col max-[480px]:gap-0">

          <a href="tel:+9779852020058">
            <div className="flex items-center justify-center gap-[10px] max-[480px]:gap-[8px]">
              <PhoneCall color="white" size={20} />
              <p className="text-white text-[14px] m-0">+977 9852020058</p>
            </div>
          </a>

          <a href="mailto:booking@sudarshanagroresort.com.np">
            <div className="flex items-center justify-center gap-[10px] max-[480px]:gap-[8px]">
              <Mail color="white" size={20} />
              <p className="text-white text-[14px] m-0">
                booking@sudarshanagroresort.com.np
              </p>
            </div>
          </a>
        </div>

        <div className="flex gap-[20px] max-[480px]:justify-center max-[480px]:gap-[16px]">
          <a href="https://facebook.com" target="_blank">
            <Facebook color="white" size={20} />
          </a>
          <a href="https://instagram.com" target="_blank">
            <Instagram color="white" size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <Linkedin color="white" size={20} />
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <nav
        className={`sticky top-0 z-[1000] w-full h-[110px]
        flex items-center justify-around gap-[100px] px-[40px]
        transition-colors duration-300
        ${scroll ? "bg-[#787878]" : "bg-[#1a1a1a]"}
        max-[480px]:h-auto max-[480px]:px-[20px] max-[480px]:py-[20px]`}
      >
        {/* Logo */}
        <div>
          <img
            src="favicon/logo.webp"
            alt="logo"
            className="h-[90px] w-[90px] rounded-full object-cover
              max-[480px]:h-[70px] max-[480px]:w-[70px]"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-[20px]">
          {/* Desktop Menu */}
          <ul className="flex gap-[40px] list-none max-[480px]:hidden">
            {["Home", "About", "Rooms", "Services", "Gallery", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-white text-[17px] font-semibold
                      transition-colors duration-300 hover:text-[#7fbf42]"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Mobile Menu Icon */}
          <Menu
            className="invisible max-[480px]:visible cursor-pointer"
            onClick={() => setMenu(!menu)}
            size={35}
            color="white"
            aria-label="Toggle menu"
          />

          {/* Book Button */}
          <Link
            to="https://d.sriyog.com/sudarshanresort"
            target="_blank"
            className="max-[480px]:hidden"
          >
            <img src="/icons/booking.svg" alt="booking" className="h-[30px]" />
          </Link>
        </div>
      </nav>

      {/*  MOBILE DROPDOWN */}
      <div
        className={`sticky top-[110px] z-[999]
        bg-[#1a1a1a] overflow-hidden
        transition-all duration-400 ease-in-out
        ${menu ? "max-h-[500px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-[10px]"}
        ${scroll ? "bg-[#787878]" : ""}
        max-[480px]:top-[80px] flex justify-center`}
      >
        <ul className="list-none bg-[#787878] m-0 p-0
          border border-white mt-[50px] w-[80%]">
          {["Home", "About", "Rooms", "Services", "Gallery", "Contact"].map(
            (item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setMenu(false)}
                  className="block px-[25px] py-[12px]
                    text-white text-[18px] font-semibold
                    border border-[#555] hover:bg-[#d68e08]"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default Nav_Bar;
