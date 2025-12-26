import React from "react";
import "./PrizeBanner.css";

const PrizeBanner = () => {
  const marqueeText = "TOTAL HADIAHNYA JUTAAN RUPIAH LOH👀 | AYOO SEGERA DAFTAR!!! | ";

  return (
    <section>
      <div className="prize-banner-container">
        <div className="marquee-content">
          <h2 className="marquee-text">{marqueeText}</h2>
          <h2 className="marquee-text">{marqueeText}</h2>
        </div>
      </div>
    </section>
  );
};

export default PrizeBanner;
