import { React, useState, useEffect } from "react";
import AddCostForm from "./AddCostForm/AddCostForm";
import TableRow from "./TableRow/TableRow";
import Navbar from "./../Navbar/Navbar";

const Main = () => {
  const api = "http://localhost:8080";
  const [expenses, setExpenses] = useState([]);
  // console.log(expenses);
  const [filter, setFilter] = useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  // useEffect(() => {
  //   fetch(`http://localhost:3030/api/allRestaurants?search=` + filter)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setExpenses(data);
  //     });
  // }, [filter]);

  // Fetching Data
  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user.data.user.email;
  useEffect(() => {
    fetch(`${api}/allExpenses/${userEmail}?search=` + filter)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setExpenses(data);
      });
  }, [filter, userEmail]);

  return (
    <section>
      <Navbar />
      <div className="container mt-5 bg-light p-4">
        <div className="d-flex justify-content-between ">
          <input
            onChange={handleFilter}
            type="text"
            placeholder="Search"
            className="form-control w-50 mb-4"
          />
          <div>
            <AddCostForm />
          </div>
        </div>
        <table class="table">
          <thead className="border">
            <tr className="text-uppercase text-secondary">
              <th scope="col">Name</th>
              <th scope="col">Cost</th>
              <th scope="col">Start Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((data) => (
              <TableRow data={data} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Main;
