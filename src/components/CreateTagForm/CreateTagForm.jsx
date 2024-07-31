import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { ErrorComponent, Spinner } from '../';
import { useAddTagMutation } from '../../store/api/contactApi';

const CreateTagForm = ({ oldTags, contactId }) => {
  const [addTag, { isLoading, isError, error }] = useAddTagMutation();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(true);

    setTimeout(() => {
      setShowError(false);
    }, [3000]);
  }, [isError]);

  return (
    <Formik
      initialValues={{ tag: '' }}
      validate={(values) => {
        const errors = {};

        if (!values.tag) {
          errors.tag = 'Required';
        } else if (values.tag.length < 2) {
          errors.tag = 'Must contain more than 2 characters';
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const oldTagsString = oldTags.reduce((acc, item) => [...acc, item.tag], []);

        const data = {
          tags: [...oldTagsString, values.tag]
        };

        await addTag({ id: contactId, data });
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
          <div>
            <input
              className="form__input"
              type="text"
              name="tag"
              placeholder="Add new tag"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tag}
            />
            <p className="form__error">{errors.tag && touched.tag && errors.tag}</p>
          </div>

          {showError && isError && (
            <ErrorComponent style={showError ? 'block' : 'hidden'} status={error?.originalStatus} />
          )}
          {isLoading ? (
            <Spinner />
          ) : (
            <button
              className={`form__button ${showError && isError ? 'hidden' : 'block'}`}
              type="submit"
              disabled={isSubmitting}
            >
              Add Tag
            </button>
          )}
        </form>
      )}
    </Formik>
  );
};

export default CreateTagForm;
