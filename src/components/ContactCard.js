import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";
import {Card} from 'react-bootstrap';
// import DateTime from '../components/DateTime'

const ContactCard = (props) => {
  const { id, timestamp, name, email } = props.contact;
  return (
    <Card style={{width:"auto"}}>
      <Card.Img variant="top" src={user} alt="user" />
      <Card.Body>
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        > 
          <Card.Title>{name}</Card.Title>
          <Card.Text>{email}</Card.Text>
          {/* <Card.Text></Card.Text> */}
          </Link>
      </Card.Body>   
      <Card.Body>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", position:"relative",margin:"7px",bottom:"10px"}}
        onClick={() =>
          {
            alert("Deleting the contact");
            props.clickHander(id);
          }
          }
      ></i>
      <Link to={{ pathname: `/edit`, state: { contact: props.contact} }}>
        <i 
          className="edit alternate outline icon"
          style={{ color: "blue", position:"relative", margin:"7px",bottom:"10px"}}
          // onClick={() =>{alert("Taking you to UPDATE-CONTACT page");}}
        ></i>
      </Link>
     <div>{timestamp}</div>
      </Card.Body>
  </Card>


  );
};

export default ContactCard;
