import React from 'react';
import { ContactCard, ErrorComponent, Spinner } from '../../';
import { useGetAllContactsQuery } from '../../../store/api/contactApi';

const ContactList = () => {
  const { data, isError, error, isLoading, refetch } = useGetAllContactsQuery();

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <ErrorComponent status={error.originalStatus} showRefetch={true} refetch={refetch} />;
  }

  const content = data?.resources.map((item) => <ContactCard key={item.id} contact={item} />);

  return (
    <div className="flex-auto w-full">
      <h1 className="title mb-1">Contacts</h1>
      <div className="flex flex-col gap-[14px] lg:gap-[16px]">{content}</div>
    </div>
  );
};

export default ContactList;
