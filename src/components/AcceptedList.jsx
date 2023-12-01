import axios from "axios";
import { BaseUrl } from "../hooks/BaseUrl";
import { useState, useEffect } from "react";
export const AcceptedList = () => {
  const URL = BaseUrl();
  const [acceptedList, setAcceptedList] = useState([]);
  useEffect(() => {
    const fetchAcceptedList = async () => {
      try {
        const result = await axios.get(`${URL}/form/acceptedList`);
        console.log(result.data);
        setAcceptedList(result.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchAcceptedList();
  }, []);
  return (
    <div className="adminPanel">
      <h2>Accepted Requests</h2>
      {acceptedList.map((item, index) => {
        return (
          <div className="request">
            <h3>Accepted Request</h3>
            <p key={item._id}>Hod Name: {item.hodName}</p>
            <p key={item._id}>Department: {item.department}</p>
            <p key={item._id}>Room No: {item.room}</p>
            <p key={item._id}>Booking For: {item.bookingFor}</p>
            <p key={item._id}>Guest Contact: {item.guestPhoneNo}</p>
            <p key={item._id}>Purpose: {item.purpose}</p>
            <p>
              <u>Dates:</u>
            </p>
            {item.dates.map((another) => (
              <p>Dec {another}</p>
            ))}
            <p key={item._id}>Status: {item.status}</p>
          </div>
        );
      })}
    </div>
  );
};
