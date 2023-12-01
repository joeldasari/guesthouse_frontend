import { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "../hooks/BaseUrl";
import { useNavigate } from "react-router-dom";
export const AdminPanel = () => {
  const URL = BaseUrl();
  const navigate = useNavigate();
  const [hodRequest, setHodRequest] = useState([]);
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(`${URL}/form`);
        setHodRequest(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchRequests();
  }, []);
  const handleAccept = async (id, dates, room) => {
    try {
      const result = await axios.post(`${URL}/form/accepted/${id}`, {
        status: 1,
        dates,
        room,
      });
      console.log(result.data);
      alert("Added to Accepted List");
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleReject = async (id) => {
    try {
      const result = await axios.put(`${URL}/form/rejected/${id}`, {
        status: 2,
      });
      alert("Added to Rejected List");
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleAcceptBtn = () => {
    navigate("/acceptedList");
  };
  const handleRejectBtn = () => {
    navigate("/rejectedList");
  };

  return (
    <div className="twoLists">
      <div className="adminPanel">
        <h2>Admin Panel</h2>
        {hodRequest
          .slice()
          .reverse()
          .map((item) => {
            return (
              <div className="request">
                <h3>Request</h3>
                <p key={hodRequest._id}>Hod Name: {item.hodName}</p>
                <p key={hodRequest._id}>Department: {item.department}</p>
                <p key={hodRequest._id}>Room No: {item.room}</p>
                <p key={hodRequest._id}>Booking For: {item.bookingFor}</p>
                <p key={hodRequest._id}>Guest Contact: {item.guestPhoneNo}</p>
                <p key={hodRequest._id}>Purpose: {item.purpose}</p>
                <p>
                  <u>Dates:</u>
                </p>
                {item.dates.map((another) => (
                  <p>Dec {another}</p>
                ))}
                <p key={hodRequest._id}>Status: {item.status}</p>

                {item.status == 0 ? (
                  <div className="buttons">
                    <button
                      onClick={() =>
                        handleAccept(item._id, item.dates, item.room)
                      }
                    >
                      Accept
                    </button>
                    <button onClick={() => handleReject(item._id)}>
                      Reject
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
      </div>
      <div className="acceptedRejected">
        <button onClick={handleAcceptBtn}>Accepted List</button>
        <button onClick={handleRejectBtn}>Rejected List</button>
      </div>
    </div>
  );
};
