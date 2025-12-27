import React from 'react';
import './ContactCard.css';
import whatsappLogo from '../assets/whatsapp.svg';

const ContactCard = ({ name, phone, competitionTitle }) => {
  // Clean the phone number to get only digits, then prepend 62
  const cleanedPhone = phone.replace(/\D/g, '');
  const internationalPhone = cleanedPhone.startsWith('0') ? '62' + cleanedPhone.substring(1) : cleanedPhone;

  // Construct the WhatsApp URL
  let waUrl = `https://wa.me/${internationalPhone}`;
  if (competitionTitle) {
    waUrl += `?text=${encodeURIComponent(`Halo kak ${name}, saya tertarik dengan lomba ${competitionTitle}.`)}`;
  } else {
    waUrl += `?text=${encodeURIComponent(`Halo kak ${name}, saya ingin bertanya mengenai sponsorship.`)}`;
  }

  return (
    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="contact-card-link">
      <div className="contact-card">
        <img src={whatsappLogo} alt="WhatsApp" className="contact-card-logo" />
        <div className="contact-card-info">
          <span className="contact-card-text">{name}</span>
          <span className="contact-card-phone">{phone}</span>
        </div>
      </div>
    </a>
  );
};

export default ContactCard;
