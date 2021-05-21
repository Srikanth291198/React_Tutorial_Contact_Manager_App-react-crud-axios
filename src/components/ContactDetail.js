import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";
import {Card} from 'react-bootstrap';
const ContactDetail = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div className="container">
    <div className="center-div">
      <Card style={{width:"400px",  margin: "auto"}}>
      <Card.Img variant="top" src={user} alt="user" />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
      </Card>
   <div className="center-div">
        <Link to="/">
          <button className="btn btn-primary">
            Back to Contact List
          </button>
        </Link>
      </div>
      
    </div>
   </div> 
  );
};

export default ContactDetail;
