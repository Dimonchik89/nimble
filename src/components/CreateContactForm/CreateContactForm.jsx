import { Formik } from 'formik';
import React from 'react';

const CreateContactForm = () => {
  return (
    <div className="flex-[0_0_280px] self-stretch">
      <div className="static lg:sticky top-3">
        <h2 className="title mb-0.5">Create Contact</h2>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }

            if (!values.firstName) {
              errors.firstName = 'Required';
            } else if (values.firstName.length < 2) {
              errors.firstName = 'Must contain more than 2 characters';
            }

            if (!values.lastName) {
              errors.lastName = 'Required';
            } else if (values.lastName.length < 2) {
              errors.lastName = 'Must contain more than 2 characters';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
              <div>
                <p className="text-xs font-normal mb-1.5">First Name</p>
                <input
                  className="form__input"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                <p className="form__error">
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>
              </div>

              <div>
                <p className="text-xs font-normal mb-1.5">Last Name</p>
                <input
                  className="form__input"
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                <p className="form__error">
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>
              </div>

              <div>
                <p className="text-xs font-normal mb-1.5">Email</p>
                <input
                  className="form__input"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p className="form__error">{errors.email && touched.email && errors.email}</p>
              </div>
              <button
                className="border-2 border-gray-300 rounded-lg text-base py-2 w-full mt-5 cursor-pointer"
                type="submit"
                disabled={isSubmitting}
              >
                Add Contact
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateContactForm;
