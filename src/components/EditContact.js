import React from "react";
import { Link } from "react-router-dom";


class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, timestamp, name, email } = props.location.state.contact;
    this.state = {
      id,
      timestamp,
      name,
      email,
      
    };
    const time = new Date();
    this.state.timestamp = (time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()).toLocaleString();
  };

// updateTime = (timestamp) => {
// const time = new Date() ; 
// return timestamp = (time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()).toLocaleString() 

// };


  update = (e) => {
    
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    //this.setState({});
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              pattern="[a-zA-Z]{1,20}"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="btn btn-primary">Update</button>
        </form>
        <div className="center-div">
        <Link to="/">
          <button className="btn btn-primary">
            Back to Contact List
          </button>
        </Link>
      </div>
      </div>
    );
  }
}

export default EditContact;
