// import React from 'react'
import './Random.css'
import React, { useState, useEffect } from "react";

const Random = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=100");
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
    //   console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []); 

  return (
    <div className='mother'>
      <table border="1" className='list'>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>State</th>
            <th>Picture</th>
            <th>School</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{`${user.name.first} ${user.name.last}`}</td>
              <td>{user.email}</td>
              <td>{user.location.state}</td>
              <td>
                <img
                  src={user.picture.thumbnail}
                  alt="User"
                 className="photos"/>
              </td>
              <td>Not Provided</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};




export default Random

