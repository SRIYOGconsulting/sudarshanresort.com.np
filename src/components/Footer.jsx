import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#008000] font-sans">
      <div className="max-w-6xl mx-auto flex flex-col text-white">
        {/* Footer Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 p-16">
          {/* About / Description */}
          <div className="flex flex-col w-full md:w-2/3">
            <div className=""> 
              <h1 className="text-3xl font-semibold">Sudarshan Agro Resort</h1>
              <p className="text-sm leading-6 mt-4">
                Enjoy your recreational time with Sudarshan Park and Resort in a Nepali Style.
                We offer you the best hospitality for your golden memories.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-6 mt-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook color="white" size={22} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram color="white" size={22} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin color="white" size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col w-full md:w-1/3">
            <h2 className="text-2xl font-semibold">Quick Links</h2>
            <ul className="list-none pl-5 space-y-2 mt-4">
              <li><Link className="text-white hover:text-[#0000EE] text-sm" to="/gallery">- Gallery</Link></li>
              <li><Link className="text-white hover:text-[#0000EE] text-sm" to="/contact">- Contact</Link></li>
              <li><Link className="text-white hover:text-[#0000EE] text-sm" to="/services">- Services</Link></li>
              <li><Link className="text-white hover:text-[#0000EE] text-sm" to="/rooms">- Rooms</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col w-full md:w-1/3">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <div className="flex items-center gap-4 mb-4 mt-4">
              <MapPin className="text-white" size={20} />
              <a href="https://www.google.com/maps/dir//Sudarshan+Resort+Belbari+56600/@26.6581597,87.4082572,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x39ef658a3db38a5d:0xbfd3187bf701d864" target="_blank" className="text-[#0000EE] underline text-sm">Lalbhitti, Belbari-2, Morang, Nepal</a>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <PhoneCall className="text-white" size={20} />
              <a href="tel:+9779852020058" className="text-[#0000EE] underline text-sm">+977-9852020058</a>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Mail className="text-white" size={20} />
              <a href="mailto:booking@sudarshanagroresort.com.np" className="text-[#0000EE] underline text-sm">
                booking@sudarshanagroresort.com.np
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#141414]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-white p-4">
          <p className="text-sm">Copyright © 2025 Sudarshan Agro Resort. All rights reserved.</p>
          <p className="text-sm">
            Technology Partner:
            <a
              className="text-[#0000EE] underline"
              href="https://sriyog.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SRIYOG
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
