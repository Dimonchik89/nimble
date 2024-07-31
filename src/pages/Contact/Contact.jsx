import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ContactCompanyTitle,
  ContactUserTitle,
  CreateTagForm,
  ErrorComponent,
  Spinner,
  TagList
} from '../../components';
import { useGetOneContactQuery } from '../../store/api/contactApi';

const Contact = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useGetOneContactQuery(id);
  const isUser = data?.resources[0].fields['first name'];

  const contsctTitle = isUser ? (
    <ContactUserTitle
      firstName={data?.resources[0].fields['first name'][0].value}
      lastName={data?.resources[0].fields['last name'][0].value}
    />
  ) : (
    <ContactCompanyTitle companyName={data?.resources[0].fields['company name'][0].value} />
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorComponent status={error.originalStatus} showRefetch={true} refetch={refetch} />;
  }

  return (
    <div className="container">
      <div className="flex justify-center mt-8">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-7">
            <img
              className="w-20 h-20 rounded-full"
              src={data?.resources[0].avatar_url}
              alt="avatar"
            />
            <div className="flex flex-col">
              {contsctTitle}
              {isUser && (
                <h3 className="contact__title">{data?.resources[0].fields.email[0].value}</h3>
              )}
            </div>
          </div>
          <div className="mb-9">
            <TagList title={'Tags'} tags={data?.resources[0].tags} />
          </div>
          <div>
            <CreateTagForm contactId={id} oldTags={data?.resources[0].tags} />
          </div>
          <Link className="mt-5 text-center" to="/">
            Go home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
