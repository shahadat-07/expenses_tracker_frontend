import { React, useState, useEffect } from "react";
import axios from "axios";

const UpdateCost = ({ _id }) => {
  const [expenses, setExpenses] = useState({});
  //   console.log(expenses);

  const { name, cost, date, type } = expenses;

  console.log(name, cost, date, type);

  // const [namee, setNamee] = useState(name);
  //   const [cost, setCost] = useState(cost);
  //   const [date, setDate] = useState("");
  //   const [type, setType] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const userEmail = user.data.user.email;
  // console.log(userEmail);

  //   useEffect(() => {
  //     fetch(`https://expenses-tracker-07.herokuapp.com/findOne/${_id}`).then((res) => setItem(res));
  // });

  //   fetch(`http://localhost:3030/api/allRestaurants?search=` + filter)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRestaurants(data);
  //     });

  const findOne = () => {
    fetch(`https://expenses-tracker-07.herokuapp.com/findOne/${_id}`).then(
      (res) =>
        res.json().then((data) => {
          setExpenses(data);
        })
    );
  };

  const addExpenses = async (event) => {
    event.preventDefault();

    await axios
      .post(`https://expenses-tracker-07.herokuapp.com/findOne/${_id}`, {
        userEmail,
        name,
        cost,
        date,
        type,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
        // if (res.data.message === "Login Success") {
        //   localStorage.setItem("user", JSON.stringify(res));
        //   window.location.href = "/dashboard";
        // } else {
        //   // eslint-disable-next-line no-restricted-globals
        //   location.reload();
        // }
      });
    // .then((window.location.href = "/signup"));
  };
  return (
    <div className="">
      <button
        onClick={findOne}
        type="button"
        className="btn btn-outline-info me-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-pencil"
          viewBox="0 0 16 16"
        >
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </svg>
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header">
              <div>
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Cost
                </h5>
                <p>Enter name, cost, date and type</p>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={addExpenses}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Name of Cost
                  </label>
                  <input
                    // defaultValue={namee}
                    // onChange={(e) => setNamee(e.target.value)}
                    type="text"
                    className="form-control p-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Cost Spent
                  </label>
                  <input
                    value={cost}
                    // onChange={(e) => setCost(e.target.value)}
                    type="text"
                    className="form-control p-2"
                    id="exampleInputPassword1"
                    placeholder="Cost"
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-2">Type</label>
                  <select
                    value={type}
                    // onChange={(e) => setType(e.target.value)}
                    className="form-control p-2"
                    name="role"
                    id="role"
                  >
                    <option value="">Select</option>
                    <option value="once">Once</option>
                    <option value="regular">Regular</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Date
                  </label>
                  <input
                    value={date}
                    // onChange={(e) => setDate(e.target.value)}
                    type="date"
                    className="form-control p-2"
                    id="exampleInputPassword1"
                  />
                </div>

                <button type="submit" className="btn btn-outline-dark">
                  Submit Expenses
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCost;
