import React from 'react';

const ContactUserTitle = ({ firstName, lastName }) => {
  return (
    <div className="flex gap-1">
      <h3 className="contact__title">{firstName}</h3>
      <h3 className="contact__title">{lastName}</h3>
    </div>
  );
};

export default ContactUserTitle;
