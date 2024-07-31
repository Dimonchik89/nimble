import React, { useEffect } from 'react';
import { useGetAllContactsQuery } from '../../../store/api/contactApi';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  const { data, error, isLoading } = useGetAllContactsQuery();

  useEffect(() => {
    // console.log(JSON.stringify(data?.resources[0].fields['first name'][0].value, null, 2));
    console.log(JSON.stringify(data?.resources[0], null, 2));
    console.log(import.meta.env.VITE_APP_AUTHORIZATION_TOKEN);
  }, [data]);

  return (
    <div className="flex-auto">
      <h1 className="title mb-1">Contacts</h1>
      <ContactItem />
    </div>
  );
};

export default ContactList;
