import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { DiJavascript } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Experience() {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#578FCA", minHeight: "100vh", padding: "40px 20px", color: "#0F0F0F" }}>
        <div className="wrapper">
          <h1>Experience</h1>
          <VerticalTimeline>
            <VerticalTimelineElement className="vertical-timeline-element--work" date="2025 - Now" iconStyle={{ background: "rgb(33, 150, 243)", color: "#0F0F0F" }} icon={<DiJavascript />}>
              <h3 className="vertical-timeline-element-title">JavaScript</h3>
              <h4 className="vertical-timeline-element-subtitle">Lab Satya Terra Bhinneka</h4>
              <p>JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web menjadi interaktif.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--work" date="2024 - Now" iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaPython />}>
              <h3 className="vertical-timeline-element-title">Python</h3>
              <h4 className="vertical-timeline-element-subtitle">Lab Satya Terra Bhinneka</h4>
              <p>Python adalah bahasa pemrograman yang sederhana dan mudah dipahami. Banyak digunakan untuk pengembangan web, analisis data, kecerdasan buatan, dan automasi</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--work" date="2025 - present" iconStyle={{ background: "rgb(33, 150, 243)", color: "#0F0F0F" }} icon={<FaHtml5 />}>
              <h3 className="vertical-timeline-element-title">Html</h3>
              <h4 className="vertical-timeline-element-subtitle">Lab Satya Terra Bhinneka</h4>
              <p>HTML (HyperText Markup Language) adalah bahasa dasar untuk membuat struktur halaman web, seperti teks, gambar, dan tautan. HTML digunakan untuk menyusun konten agar bisa ditampilkan di browser.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--work" date="2025 - present" iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaCss3Alt />}>
              <h3 className="vertical-timeline-element-title">CSS</h3>
              <h4 className="vertical-timeline-element-subtitle">Lab Satya Terra Bhinneka</h4>
              <p>
                CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mengatur tampilan dan tata letak elemen HTML di halaman web. CSS memungkinkan kamu mengatur warna, ukuran, posisi, font, dan responsivitas elemen dengan
                efisien, baik secara langsung di elemen inline, di tag style, atau lewat file terpisah .css.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--work" date="2025 - present" iconStyle={{ background: "rgb(33, 150, 243)", color: "#0F0F0F" }} icon={<FaReact />}>
              <h3 className="vertical-timeline-element-title">React</h3>
              <h4 className="vertical-timeline-element-subtitle">Lab Satya Terra Bhinneka</h4>
              <p>
                React adalah library JavaScript untuk membangun antarmuka pengguna UI secara efisien, terutama untuk aplikasi web satu halaman SPA. React menggunakan komponen, yaitu bagian-bagian UI yang dapat digunakan kembali, dan konsep
                virtual DOM untuk membuat perubahan UI lebih cepat dan responsif.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--work" date="2019 - present" iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<GiMountainClimbing />}>
              <h3 className="vertical-timeline-element-title">Mountain climbing</h3>
              <h4 className="vertical-timeline-element-subtitle">Sejak SMP/MTS</h4>
              <p>
                Mendaki gunung adalah aktivitas berjalan kaki ke puncak gunung untuk menikmati alam, tantangan, dan keindahan panorama bukan hanya itu Mendaki gunung juga perjalanan menaklukkan diri sendiri melalui langkah-langkah menuju
                puncak alam dan jiwa.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
