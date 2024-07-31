import React from 'react';

const ContactCompanyTitle = ({ companyName }) => {
  return (
    <div className="flex gap-1">
      <h3 className="contact__title">{companyName}</h3>
    </div>
  );
};

export default ContactCompanyTitle;
