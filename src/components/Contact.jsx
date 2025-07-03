import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Pesan berhasil dikirim!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="wrapper">
        <h3 style={{ textAlign: "center" }}>Contact Me</h3>
        <div style={{ padding: "3rem", maxWidth: "600px", margin: "auto" }}>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nama" value={formData.name} onChange={handleChange} required style={{ width: "100%", margin: "0.5rem 0", padding: "0.5rem" }} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={{ width: "100%", margin: "0.5rem 0", padding: "0.5rem" }} />
            <textarea
              name="message"
              placeholder="Pesan"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                margin: "0.5rem 0",
                padding: "0.5rem",
                height: "100px",
              }}
            />
            <button type="submit" style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
              Kirim
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
