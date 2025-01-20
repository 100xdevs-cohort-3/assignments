import React, { Component } from "react";

export class AdopterData extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.goBackHandler = props.goBackHandler;
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Breed</th>
              <th>Adopter Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.data.map((element, index) => (
              <tr key={index}>
                <td>{element.petName}</td>
                <td>{element.petType}</td>
                <td>{element.breed}</td>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button style={{ width: "fit-content" }} onClick={this.goBackHandler}>
          Go Back
        </button>
      </div>
    );
  }
}

export default AdopterData;
