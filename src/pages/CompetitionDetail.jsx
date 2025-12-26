import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { competitionData, globalInfo } from '../data/competitionData';
import { Download, ArrowLeft } from 'lucide-react';

const CompetitionDetail = () => {
  const { id } = useParams();
  const competition = competitionData.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!competition) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1 style={{color: 'var(--accent-purple)', fontSize: '4rem'}}>404</h1>
        <p>Kompetisi tidak ditemukan.</p>
        <Link to="/" className="custom-btn btn-purple" style={{ marginTop: '20px' }}>
          Kembali ke Home
        </Link>
      </div>
    );
  }

  const formatWhatsappLink = (cp) => {
    const phone = cp.match(/(\d{10,})/);
    if (phone) {
      const internationalNumber = '62' + phone[0].substring(1);
      const name = cp.split('(')[0].trim();
      return `https://wa.me/${internationalNumber}?text=Halo%20kak%20${name},%20saya%20tertarik%20dengan%20lomba%20${competition.title}.`;
    }
    return '#';
  };

  return (
    <div style={{ padding: '120px 20px 80px', maxWidth: '900px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/" className="custom-btn btn-purple" style={{ marginBottom: '40px', display: 'inline-flex', alignItems: 'center' }}>
          <ArrowLeft size={20} style={{ marginRight: '10px' }} />
          Back to Home
        </Link>
      </motion.div>
      
      <motion.div 
        className="csf-window" 
        style={{ padding: '40px' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="sparkle-decor" style={{ top: "-15px", left: "-15px" }}></div>
        <div className="sparkle-decor" style={{ top: "-15px", right: "-15px" }}></div>
        <div className="sparkle-decor" style={{ bottom: "-15px", left: "-15px" }}></div>
        <div className="sparkle-decor" style={{ bottom: "-15px", right: "-15px" }}></div>

        <h1 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '20px' }}>
            {competition.icon} {competition.title}
        </h1>
        
        <div style={{margin: '40px 0'}}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Timeline Lomba</h2>
            <div className="timeline-wrapper">
                {competition.timeline.map((item, index) => (
                    <div key={index} className="timeline-card">
                        <div className="timeline-date">{item.date}</div>
                        <div className="timeline-activity">{item.activity}</div>
                    </div>
                ))}
            </div>
        </div>

        <div style={{margin: '40px 0'}}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>Prize Information</h2>
            <div className="csf-window" style={{padding: '20px', textAlign: 'center'}}>
                <p style={{fontSize: '1.2rem', fontWeight: 'bold', margin: 0}}>
                    {
                        competition.id === 'mobile-legends'
                        ? "Uang Pembinaan + Sertifikat + Diamond"
                        : "Uang Pembinaan + Sertifikat"
                    }
                </p>
            </div>
        </div>

        <div style={{margin: '40px 0'}}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>HTM & Payment</h2>
            <div className="csf-window" style={{padding: '20px', textAlign: 'center'}}>
                <p style={{fontSize: '2rem', color: 'var(--accent-green)', margin: 0}}>HTM: {competition.htm}</p>
            </div>
            <div className="csf-window" style={{padding: '20px', marginTop: '20px'}}>
                <p style={{fontSize: '1.2rem', textAlign: 'center', fontWeight: 'bold', marginBottom: '10px'}}>Silahkan lakukan pembayaran ke:</p>
                <p style={{fontSize: '1.2rem', textAlign: 'center'}}>
                    <strong>{globalInfo.payment.method}:</strong> {globalInfo.payment.account} (a.n {globalInfo.payment.owner})
                </p>
            </div>
        </div>
        
        <div style={{margin: '40px 0'}}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Contact Person</h3>
            <div>
              <p style={{fontSize: '1.2rem'}}>
                Narahubung: <a href={formatWhatsappLink(competition.cp)} className="styled-link" target="_blank" rel="noopener noreferrer">{competition.cp}</a>
              </p>
            </div>
        </div>

        <div style={{textAlign: 'center', marginTop: '50px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px'}}>
            <motion.a href={competition.linkGForm} target="_blank" rel="noopener noreferrer" className="custom-btn btn-green" style={{fontSize: '1.2rem'}} whileHover={{ scale: 1.05 }}>
                Daftar Sekarang
            </motion.a>
            <motion.a href={globalInfo.links.guidebook} target="_blank" rel="noopener noreferrer" className="custom-btn btn-purple" style={{fontSize: '1.2rem'}} whileHover={{ scale: 1.05 }}>
                <Download size={20} style={{ marginRight: '10px' }}/>
                Download Guidebook
            </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default CompetitionDetail;
