import { Link } from "react-router-dom";

const Whatsapp_logo = () => {
  return (
    <div>
      <Link to="#">
        <img
          src="og/whatsapplogo.webp"
          alt="whatsapp"
          aria-label="whatsapp"
          className="
            fixed
            bottom-[100px]
            right-[20px]
            w-[60px]
            h-[60px]
            z-[100]
          "
        />
      </Link>
    </div>
  );
};

export default Whatsapp_logo;
