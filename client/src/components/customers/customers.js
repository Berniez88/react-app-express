import "./customers.css";
import React, { useEffect, useState } from "react";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // we dont need to do fetch('http:localhost:5000) since we have our proxy in our package.json
    // making a request to our backend and filling our customers variable with the data
    fetch("/api/customers") //! this is the request
      .then((res) => res.json())
      .then((data) => {
        console.log("data is: ", data);
        setCustomers(data);
      });
  }, []);
  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map((customer, index) => {
          return (
            <li key={index}>
              {customer.firstName} {customer.lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Customers;
