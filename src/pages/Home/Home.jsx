import React from "react";
import ContactList from "../../components/Contact/ContactList/ContactList";
import CreateContactForm from "../../components/CreateContactForm/CreateContactForm";

const Home = () => {


  return (
    <div className="pt-9">
    <div className="container">
      <div className="flex gap-[38px] flex-col items-center lg:items-start lg:flex-row">
        <CreateContactForm />
        <ContactList />
      </div>
    </div>
    </div>
  );
};

export default Home;
