import React from "react";
import "./user.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="userTable">
      <Link to="/add" type="button" class="btn btn-primary">
        Add User <i class="fa-solid fa-user-plus"></i>
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email} </td>
                <td>{user.address}</td>
                <td className="actionButtons">
                  <Link
                    to={`/update/` + user._id}
                    type="button"
                    class="btn btn-info"
                  >
                    <i class="fa-solid fa-pen-to-square"></i>
                  </Link>

                  <button
                    // onClick={() => deleteUser(user._id)}
                    type="button"
                    class="btn btn-danger"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
