import { React, useState } from "react";
import axios from "axios";
import { UserContext } from "../../../App";

const AddCostForm = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");

  // console.log(name, cost, date, type);

  const user = JSON.parse(localStorage.getItem("user"));

  const userEmail = user.data.user.email;
  // console.log(userEmail);

  const addExpenses = async (event) => {
    event.preventDefault();

    await axios
      .post("https://expenses-tracker-07.herokuapp.com/addExpenses", {
        userEmail,
        name,
        cost,
        date,
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
    <div>
      <button
        type="button"
        className="btn btn-outline-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Cost
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
                <h5 className="modal-title text-info" id="exampleModalLabel">
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setCost(e.target.value)}
                    type="text"
                    className="form-control p-2"
                    id="exampleInputPassword1"
                    placeholder="Cost"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Date
                  </label>
                  <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    className="form-control p-2"
                    id="exampleInputPassword1"
                  />
                </div>

                <button type="submit" className="btn btn-outline-info">
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

export default AddCostForm;
