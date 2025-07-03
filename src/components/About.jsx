import "../styles/About.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaPython } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";

function TypingText({ text, speed = 25, start = true }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!start) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return <p className="typing-text">{displayedText}</p>;
}

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" ref={ref}>
      <div className="wrapper">
        <h3>About</h3>

        <TypingText
          text="Halo! Nama saya Surya Putra Sitiadi. Saya tinggal di Medan Tepatnya Di Jl. Beringin Psr.7 Tembung Gg.Kenari Saya adalah seseorang yang senang belajar hal-hal baru, terutama di dunia teknologi dan desain. Saya suka mengeksplorasi ide-ide kreatif, bekerja secara detail, dan terbuka terhadap tantangan. Dalam setiap hal yang saya kerjakan, saya berusaha memberikan yang terbaik dan terus berkembang dari pengalaman."
          start={inView}
        />

        <p>Di waktu luang, saya suka mencoba tools baru, membaca, dan kadang ngulik coding atau desain antarmuka. Bagi saya, proses belajar adalah perjalanan tanpa akhir, dan saya percaya bahwa konsistensi adalah kunci kesuksesan.</p>

        <h4>Programming Language & Tools</h4>
        <div className="skills">
          <FaHtml5 className={`icon delay-1 ${inView ? "animate" : ""}`} />
          <FaCss3Alt className={`icon delay-2 ${inView ? "animate" : ""}`} />
          <FaPhp className={`icon delay-3 ${inView ? "animate" : ""}`} />
          <FaReact className={`icon delay-4 ${inView ? "animate" : ""}`} />
          <DiJavascript className={`icon delay-5 ${inView ? "animate" : ""}`} />
          <FaPython className={`icon delay-6 ${inView ? "animate" : ""}`} />
        </div>
      </div>
    </section>
  );
}

export default About;
