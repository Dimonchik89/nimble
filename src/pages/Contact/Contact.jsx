import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Contact = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <div>
      <Link to="/">go back</Link>Contact
    </div>
  );
};

export default Contact;
