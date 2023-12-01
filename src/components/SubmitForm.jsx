import { useState } from "react";
import { GetRoom } from "../hooks/GetRoom";
import axios from "axios";
import { BaseUrl } from "../hooks/BaseUrl";
import { useNavigate } from "react-router-dom";
import { GetDuration } from "../hooks/GetDuration";

const SubmitForm = () => {
  const room = GetRoom();
  const URL = BaseUrl();
  const duration = GetDuration();
  const [hodName, setHodName] = useState("");
  const [department, setDepartment] = useState("");
  const [bookingFor, setBookingFor] = useState("");
  const [guestPhoneNo, setGuestPhoneNo] = useState("");
  const [purpose, setPurpose] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${URL}/form/`, {
        hodName,
        department,
        bookingFor,
        guestPhoneNo,
        purpose,
        dates: duration,
        room,
        status: 0,
      });
      alert("Request Sent to Admin");
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const goBack = () => {
    navigate("/hodHome");
  };
  return (
    <div className="formToSubmit">
      <form className="submitForm">
        <h2>Booking Form</h2>
        <input
          type="text"
          placeholder="Hod Name"
          onChange={(e) => setHodName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          onChange={(e) => setDepartment(e.target.value)}
        />
        <input
          type="text"
          placeholder="Booking For"
          onChange={(e) => setBookingFor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Guest PhoneNo"
          onChange={(e) => setGuestPhoneNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Purpose"
          onChange={(e) => setPurpose(e.target.value)}
        />
        <span>
          <u>RoomNo</u>: {room}
        </span>
        <span>
          <u>For:</u>{" "}
        </span>
        {duration.map((item) => (
          <span>Dec {item}</span>
        ))}
        <button type="submit" onClick={(e) => onSubmit(e)}>
          Submit
        </button>
      </form>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export { SubmitForm };
