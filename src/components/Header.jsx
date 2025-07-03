import profilePictures from "../assets/profile-Pictures.png";
import { FaInstagram, FaTiktok, FaWhatsapp, FaFacebook } from "react-icons/fa";
import Typewriter from "typewriter-effect";

import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePictures} alt="Profile" />
        <h3 className="typewriter-text">
          <Typewriter
            options={{
              strings: ["SURYA PUTRA SITIADI"],
              autoStart: true,
              loop: true,
              delay: 100,
              pauseFor: 1500,
            }}
          />
        </h3>
        <p>Mahasiswa Satya Terra Bhinneka</p>
        <div
          className="socialMedia"
          style={{
            display: "flex",
            gap: "19px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <a href="https://www.instagram.com/suryaaaahh_?igsh=MXY1MmhkMzJ0N3RraQ==" className="instagram">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@n4chtsk?_t=ZS-8xGt6BYMW6D&_r=1" className="tiktok">
            <FaTiktok />
          </a>
          <a href="https://wa.me/qr/YGLR2HOJAJWSE1" className="whatsapp">
            <FaWhatsapp />
          </a>
          <a href="https://www.facebook.com/share/1EDdi1n9HK/" className="facebook">
            <FaFacebook />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
