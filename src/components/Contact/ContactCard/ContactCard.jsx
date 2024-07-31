import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactCompanyTitle, ContactUserTitle, ErrorComponent, Spinner, TagList } from '../..';
import { useDeleteContactMutation } from '../../../store/api/contactApi';

const ContactCard = ({ contact }) => {
  const { id, fields, avatar_url, tags } = contact;
  const [deleteContact, { isLoading, isError, error }] = useDeleteContactMutation();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(true);

    setTimeout(() => {
      setShowError(false);
    }, [4000]);
  }, [isError]);

  const contactTitle = fields['first name'] ? (
    <ContactUserTitle
      firstName={fields['first name'][0].value}
      lastName={fields['last name'][0].value}
    />
  ) : (
    <ContactCompanyTitle companyName={fields['company name'][0].value} />
  );

  const contactEmail = fields.email && (
    <div className="mb-1.5">
      <p className="contact__title">{fields.email[0].value}</p>
    </div>
  );

  return (
    <div className="pt-3 pr-5 pb-6 pl-4 bg-gray-200 rounded-sm relative">
      <Link to={`/contact/${id}`}>
        <div className="flex gap-3">
          <img src={avatar_url} alt="avatar" className="w-[59px] h-[59px] rounded-full" />
          <div className="flex flex-col gap-3">
            <div>
              {contactTitle}
              {contactEmail}
            </div>
            <TagList tags={tags} />
          </div>
        </div>
      </Link>
      {isLoading ? (
        <Spinner style={'!w-5 absolute top-2.5 right-4'} />
      ) : (
        <button
          className="absolute top-2.5 right-4 pointer hover:scale-105 duration-100 ease-in"
          onClick={() => deleteContact(id)}
          disabled={isLoading}
        >
          {showError && isError ? (
            <ErrorComponent status={error?.originalStatus} />
          ) : (
            <img src="/icons/close.svg" />
          )}
        </button>
      )}
    </div>
  );
};

export default ContactCard;
