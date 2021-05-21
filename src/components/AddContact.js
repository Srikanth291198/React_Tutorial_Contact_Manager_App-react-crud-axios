import React from "react";
import { Link } from "react-router-dom";


class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" ) {
      alert("ALl the fields are mandatory!");
      return;
    }

    
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
    
};

  render() {
    return (
      <div className="container">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              pattern="[a-zA-Z]{1,20}"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            required/>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={this.state.email}
              onChange={(e) => {this.setState({ email: e.target.value });}}
            required/>
          </div>

          {/* <p onChange={(e) => {this.setState({ timestamp: e.target.value });}}>{DateTime()}</p>  */}

          <button className="btn btn-primary">Add</button>
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

export default AddContact;
