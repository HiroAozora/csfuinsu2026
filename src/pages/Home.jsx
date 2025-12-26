import React from "react";
import { motion } from "framer-motion";
import { Download, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { competitionData, globalInfo } from "../data/competitionData";
import PrizeBanner from "../components/PrizeBanner";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const globalTimeline = [
      { date: "24 Des 2025 - 07 Jan 2026", activity: "Pendaftaran Perlombaan" },
      { date: "08 Januari 2026", activity: "Technical Meeting" },
      { date: "12 - 13 Januari 2026", activity: "Pelaksanaan Perlombaan" },
      { date: "14 Januari 2026", activity: "Pengumuman Juara" },
  ];

  return (
    <div id="home">
      {/* --- HERO SECTION --- */}
      <section style={{ padding: "150px 20px 80px", textAlign: "center" }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="csf-window"
          style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 20px" }}
        >
          <div className="sparkle-decor" style={{ top: "-15px", left: "-15px" }}></div>
          <div className="sparkle-decor" style={{ bottom: "-15px", right: "-15px" }}></div>
          <h1 style={{ fontSize: "3.5rem", marginBottom: "10px" }}>
            COMPUTER SCIENCE FESTIVAL 2026
          </h1>
          <p style={{ fontSize: "1.5rem", letterSpacing: "2px", color: "var(--text-color)" }}>
            "Beyond the Code: Where Technology, Talent, and Sport Unite"
          </p>
          <div style={{ marginTop: "30px" }}>
            <p className="nes-badge">
              <span className="is-dark">JANUARI 2026</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- PRIZE BANNER SECTION --- */}
      <PrizeBanner />

      {/* --- TIMELINE SECTION --- */}
      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "2.5rem" }}>
          GLOBAL EVENT TIMELINE
        </h2>
        <motion.div 
            className="timeline-wrapper"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {globalTimeline.map((item, index) => (
            <motion.div key={index} className="timeline-card" variants={itemVariants}>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-activity">{item.activity}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- COMPETITION GRID --- */}
      <section id="lomba" style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "2.5rem" }}>
          SELECT YOUR COMPETITION
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
          }}
        >
          {competitionData.map((lomba) => (
            <motion.div
              key={lomba.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Link to={`/lomba/${lomba.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  className="csf-window"
                  style={{
                    padding: "30px",
                    textAlign: "center",
                    borderTop: `15px solid ${lomba.color}`,
                    height: '100%'
                  }}
                >
                  <span style={{ fontSize: "60px" }}>{lomba.icon}</span>
                  <h3 style={{ fontSize: "1.8rem", margin: "15px 0" }}>
                    {lomba.title}
                  </h3>
                  <p style={{ fontWeight: "bold", fontSize: '1.2rem', color: 'var(--accent-green)' }}>
                    HTM: {lomba.htm}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- GUIDEBOOK & TENANT SECTION --- */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href={globalInfo.links.guidebook}
            target="_blank"
            rel="noopener noreferrer"
            className="custom-btn btn-purple"
            whileHover={{ scale: 1.05 }}
          >
            <Download size={20} style={{ marginRight: '10px' }} /> DOWNLOAD GUIDEBOOK
          </motion.a>
          <motion.a
            href={globalInfo.links.tenant}
            target="_blank"
            rel="noopener noreferrer"
            className="custom-btn btn-green"
            whileHover={{ scale: 1.05 }}
          >
            DAFTAR TENANT
          </motion.a>
        </div>
      </section>

      {/* --- SPONSOR & MEDIA PARTNER --- */}
      <section id="sponsor" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "30px", fontSize: '2.5rem' }}>MEDIA PARTNER</h2>
        <div
          className="csf-window"
          style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}
        >
          <p style={{ color: "var(--text-color)", opacity: 0.6 }}>
            Logo Media Partner Akan Muncul di Sini
          </p>
        </div>

        <div style={{ marginTop: "50px" }}>
          <h3 style={{fontSize: '2rem'}}>CALLING FOR SPONSOR</h3>
          <p style={{fontSize: '1.2rem'}}>Hubungi Naina: <a href="https://wa.me/6281396679791" className="styled-link" target="_blank" rel="noopener noreferrer">0813-9667-9791</a></p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <p style={{ fontSize: "1.5rem", marginBottom: '10px' }}>
          {globalInfo.organizedBy}
        </p>
        <p style={{fontSize: '1.2rem'}}>Fakultas Sains dan Teknologi UINSU</p>
        <div
          className="footer-links"
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <a href={globalInfo.links.instagram} target="_blank" rel="noopener noreferrer"><Instagram /></a>
          <a href="mailto:hmjilkom.uinsu@gmail.com"><Mail /></a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
