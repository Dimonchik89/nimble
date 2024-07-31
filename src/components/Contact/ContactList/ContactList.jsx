import React from 'react';
import { useGetAllContactsQuery } from '../../../store/api/contactApi';
import Spinner from '../../Spinner/Spinner';
import ContactCart from '../ContactCart/ContactCart';

const ContactList = () => {
  const { data, error, isLoading } = useGetAllContactsQuery();

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <p className="w-full text-center">{`Error: ${error.originalStatus}`}</p>;
  }

  const content = data?.resources.map((item) => <ContactCart key={item.id} contact={item} />);

  return (
    <div className="flex-auto w-full">
      <h1 className="title mb-1">Contacts</h1>
      <div className="flex flex-col gap-[14px] lg:gap-[16px]">{content}</div>
    </div>
  );
};

export default ContactList;
