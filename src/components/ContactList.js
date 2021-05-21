import React from "react";
import ContactCard from "./ContactCard";
import {CardColumns} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      /> 
    );
  });
  
  return (
    <>
      <h2 className="sticky">Contact List         
      <Link to="/add">
          <button className="btn btn-primary center" style={{float:"right"}}>Add Contact</button>
        </Link></h2> 
      <CardColumns>{renderContactList}</CardColumns>
    </>
  );
};

export default ContactList;
