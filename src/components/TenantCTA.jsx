import React from "react";
import { motion } from "framer-motion";
import { Store, ClipboardPen } from "lucide-react";
import { globalInfo } from "../data/competitionData";
import "./TenantCTA.css";

const TenantCTA = () => {
  return (
    <section className="tenant-cta-section">
      <div className="csf-window tenant-cta-card">
        <div className="tenant-cta-icon-area">
          <Store size={80} strokeWidth={1.5} />
        </div>
        <div className="tenant-cta-content">
          <h3 className="tenant-cta-title">OPEN TENANT / BAZAAR!</h3>
          <p className="tenant-cta-description">
            AYO PROMOSIKAN BRAND DAN PRODUK KAMU DI CSF 2026!
          </p>
          <motion.a
            href={globalInfo.links.tenant}
            target="_blank"
            rel="noopener noreferrer"
            className="custom-btn btn-green tenant-cta-button"
            whileHover={{ scale: 1.05 }}
          >
            <ClipboardPen size={24} style={{ marginRight: "12px" }} />
            DAFTAR SEKARANG
          </motion.a>
          <p className="tenant-cta-scarcity">*Limited Slots Available!</p>
        </div>
      </div>
    </section>
  );
};

export default TenantCTA;
