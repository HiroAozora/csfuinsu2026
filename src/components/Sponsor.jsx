import React from 'react';
import sponsorData from '../data/sponsorData';
import './Sponsor.css'; // Kita akan membuat file CSS ini setelahnya

function Sponsor() {
  return (
    <section className="sponsor-section">
      <h2 className="sponsor-title">Didukung Oleh</h2>
      <div className="sponsor-grid">
        {sponsorData.map(sponsor => (
          <a 
            key={sponsor.id} 
            href={sponsor.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="csf-window"
            style={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '200px', 
              height: '100px',
              padding: '10px',
              overflow: 'hidden' /* To contain the scaled-up logo */
            }}
          >
            <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Sponsor;
