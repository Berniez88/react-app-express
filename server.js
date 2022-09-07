const express = require("express");
const app = express();

// our route
app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastname: "Doe" },
    { id: 2, firstName: "Steve", lastname: "Smith" },
    { id: 3, firstName: "Mary", lastname: "Swanson" },
  ];

  res.json(customers); // we respond with json
  // sends a json response array of users
});
const port = 5000;

app.get("*");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
