import React, { useEffect } from 'react';
import { useGetAllContactsQuery } from '../../../store/api/contactApi';
import Spinner from '../../Spinner/Spinner';
import ContactCart from '../ContactCart/ContactCart';

const ContactList = () => {
  const { data, error, isLoading } = useGetAllContactsQuery();

  // useEffect(() => {
  //   // console.log(JSON.stringify(data?.resources[0].fields['first name'][0].value, null, 2));
  //   console.log(JSON.stringify(data?.resources[0], null, 2));
  //   console.log(import.meta.env.VITE_APP_AUTHORIZATION_TOKEN);
  // }, [data]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <p className="w-full text-center">{`Error: ${error.originalStatus}`}</p>;
  }

  return (
    <div className="flex-auto">
      <h1 className="title mb-1">Contacts</h1>
      <ContactCart />
    </div>
  );
};

export default ContactList;
